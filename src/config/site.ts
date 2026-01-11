import type { SiteConfig } from './types';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './locales';

const siteConfig: SiteConfig = {
  // Basic site information
  // TODO: GitHub Pages 주소로 변경하세요.
  // - User Pages: https://USERNAME.github.io
  // - Project Pages: https://USERNAME.github.io/REPO
  siteUrl: 'https://FORET02.github.io',

  title: {
    ko: "Foret's Blog",
  },
  description: {
    ko: 'Welcome to Foret\'s Blog! Here, I share my thoughts and experiences on security and development.',
  },

  // Author information
  author: {
    name: {
      ko: 'FORET',
    },
    email: 'doeun1101@email.com',
    avatar: '/img/pettydust.jpg',
    bio: {
      ko: '보안/개발 기록을 정리하는 기술 블로그입니다.',
    },
  },

  // Blog settings
  postsPerPage: 10,
  //featuredImageFallback: '/img/posts/placeholder.svg',

  // Contact & social links (Korean only) — GitHub만 사용
  contactLinks: [
    {
      id: 'github',
      label: {
        ko: 'GitHub',
      },
      url: {
        ko: 'https://github.com/FORET02',
      },
      iconSvg: `<svg
  stroke="currentColor"
  fill="currentColor"
  stroke-width="0"
  viewBox="0 0 1024 1024"
  class="icon"
  height="1em"
  width="1em"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
</svg>`,
    },

    // --- 아래는 필요 시 주석 해제해서 사용하세요 (한국어 키 기준) ---

    // {
    //   id: 'linkedin',
    //   label: { ko: 'LinkedIn' },
    //   url: { ko: 'https://linkedin.com/in/yourusername' },
    //   icon: '💼',
    // },
    // {
    //   id: 'twitter',
    //   label: { ko: 'X(Twitter)' },
    //   url: { ko: 'https://x.com/yourusername' },
    //   icon: '🐦',
    // },
    // {
    //   id: 'telegram',
    //   label: { ko: 'Telegram' },
    //   url: { ko: 'https://t.me/yourusername' },
    //   icon: '✈️',
    // },
    // {
    //   id: 'instagram',
    //   label: { ko: 'Instagram' },
    //   url: { ko: 'https://www.instagram.com/yourusername/' },
    //   icon: '📸',
    // },
    // {
    //   id: 'youtube',
    //   label: { ko: 'YouTube' },
    //   url: { ko: 'https://www.youtube.com/@yourusername' },
    //   icon: '▶️',
    // },
  ],

  projects: [
    /*{
      id: 'morethan-log-astro',
      url: 'https://github.com/JustSereja/morethan-log-astro',
      label: {
        ko: 'Morethan-Log (Astro)',
      },
      iconSvg: `<svg
  stroke="currentColor"
  fill="currentColor"
  stroke-width="0"
  viewBox="0 0 1024 1024"
  class="icon"
  height="1em"
  width="1em"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
</svg>`,
    },*/
  ],

  categories: {
    security: {
      enabled: true,
      path: '/security',
      icon: '🚨',
      label: {
        ko: 'security',
      },
      description: {
        ko: '보안 이슈 등 보안 관련 내용을 다룹니다.',
      },
    },
  },

  navigation: [
    {
      id: 'about',
      labelKey: 'ui.about',
      translationKey: 'about',
    },
  ],

  // Feature toggles
  features: {
    darkMode: true,
    search: true,
    rss: true,
    sitemap: true,
    imageLightbox: true,
    postNavigation: true,
    readingTime: true,
    viewCounter: true,
  },

  // SEO & Meta tags
  seo: {
    defaultImage: '/img/pettydust.jpg',
    twitterHandle: '',
    googleAnalytics: '',
  },

  // Language settings
  // ⚠️ 이 파일을 ko-only로 쓰려면, src/config/locales.ts에서도 DEFAULT_LOCALE/SUPPORTED_LOCALES가 ko 기준이어야 합니다.
  defaultLanguage: DEFAULT_LOCALE,
  languages: [...SUPPORTED_LOCALES],

  // Date format settings
  dateFormats: {
    ko: {
      locale: 'ko-KR',
      options: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
      compactOptions: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
    },
  },
};

export default siteConfig;
export type { SiteConfig } from './types';
export { SUPPORTED_LOCALES, SUPPORTED_LOCALES as SUPPORTED_LANGUAGES } from './locales';
