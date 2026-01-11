import siteConfig from '@config/site';
import {
  getPostCategory,
  getPostImage,
  getPostLanguage,
  getPostPermalink,
  getPosts,
} from '@lib/content';
import { DEFAULT_LOCALE } from '@lib/language';
import { formatDate } from '@lib/format';

const isDevelopment = import.meta.env.DEV;
const MAX_CONTENT_LENGTH = 400;

function cleanMarkdown(body) {
  return body
    .replace(/!\[[^\]]*]\([^)]*\)/g, '')
    .replace(/\[[^\]]*]\([^)]*\)/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/^#+\s+(.*)/gm, '$1')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/_(.*?)_/g, '$1')
    .replace(/`{1,3}([^`]*)`{1,3}/g, '$1')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function toAbsoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return null;
  if (pathOrUrl.startsWith('http')) return pathOrUrl;

  const base = siteConfig.siteUrl.replace(/\/$/, '');
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

export async function GET() {
  const posts = await getPosts({ includeDrafts: isDevelopment });

  const payload = posts.map((entry) => {
    const category = getPostCategory(entry);
    const lang = getPostLanguage(entry);

    const raw = cleanMarkdown(entry.body || '');
    const content =
      raw.length <= MAX_CONTENT_LENGTH
        ? raw
        : `${raw.slice(0, MAX_CONTENT_LENGTH).trim()}…`;

    const imageCandidate = getPostImage(entry) || siteConfig.featuredImageFallback;
    const imageUrl = toAbsoluteUrl(imageCandidate);

    return {
      title: entry.data.h1 ?? entry.data.title ?? 'Untitled',
      description: entry.data.description ?? entry.data.announcement ?? '',
      url: new URL(getPostPermalink(entry), siteConfig.siteUrl).toString(),
      date: formatDate(entry.data.date, lang),
      publishedAt: entry.data.date?.toISOString?.() ?? '',
      content,
      imageUrl,
      category,
      icon: siteConfig.categories[category]?.icon ?? '📂',
      lang,
      categoryText:
        siteConfig.categories[category]?.label?.[lang] ??
        siteConfig.categories[category]?.label?.[DEFAULT_LOCALE] ??
        category,
    };
  });

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
