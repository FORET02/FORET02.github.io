import React, { useEffect, useMemo, useState } from "react";
import Giscus from "@giscus/react";

type GiscusMapping = "pathname" | "url" | "title" | "og:title" | "specific" | "number";

interface GiscusCommentsProps {
  repo?: string;
  repoId?: string;
  categoryId?: string;

  mapping?: GiscusMapping;

  term?: string;
}

type ThemeMode = "light" | "dark";

function getThemeMode(): ThemeMode {
  if (typeof document === "undefined") return "light";
  const t = document.documentElement?.dataset?.theme;
  return t === "dark" ? "dark" : "light";
}

const STORAGE_KEY = "theme";

const GiscusComments: React.FC<GiscusCommentsProps> = ({
  repo,
  repoId,
  categoryId,
  mapping = "pathname", 
  term,
}) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    if (typeof document === "undefined") return;

    const sync = () => {
      const next = getThemeMode();
      setMode((prev) => (prev === next ? prev : next));
    };

    sync();

    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) return;
      sync();
    };
    window.addEventListener("storage", onStorage);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const giscusKey = useMemo(
    () => `giscus-${mode}-${mapping}-${mapping === "specific" ? term ?? "" : ""}`,
    [mode, mapping, term]
  );

  const giscusConfig = useMemo(
    () => ({
      repo:
        repo ||
        import.meta.env.PUBLIC_GISCUS_REPO ||
        "tomcomtang/astro-cartoon-portfolio",
      repoId:
        repoId ||
        import.meta.env.PUBLIC_GISCUS_REPO_ID ||
        "R_kgDOQhFeMw",
      category: "General",
      categoryId:
        categoryId ||
        import.meta.env.PUBLIC_GISCUS_CATEGORY_ID ||
        "DIC_kwDOQhFeM84CzVPU",

      mapping: mapping as GiscusMapping,
      
      term: mapping === "specific" ? term : undefined,

      reactionsEnabled: "1" as const,
      emitMetadata: "0" as const,
      inputPosition: "bottom" as const,
      theme: (mode === "dark" ? "noborder_dark" : "noborder_light") as const,
      lang: "en" as const,
      loading: "lazy" as const,
    }),
    [repo, repoId, categoryId, mode, mapping, term]
  );

  return (
    <div id="giscus-container">
      <Giscus
        key={giscusKey}
        repo={giscusConfig.repo}
        repoId={giscusConfig.repoId}
        category={giscusConfig.category}
        categoryId={giscusConfig.categoryId}
        mapping={giscusConfig.mapping}
        term={giscusConfig.term}
        reactionsEnabled={giscusConfig.reactionsEnabled}
        emitMetadata={giscusConfig.emitMetadata}
        inputPosition={giscusConfig.inputPosition}
        theme={giscusConfig.theme}
        lang={giscusConfig.lang}
        loading={giscusConfig.loading}
      />
    </div>
  );
};

export default GiscusComments;
