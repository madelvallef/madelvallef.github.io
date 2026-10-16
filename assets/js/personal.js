(() => {
  const root = document.documentElement;
  const header = document.querySelector("[data-site-header]");
  const toggle = document.querySelector("[data-theme-toggle]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");
  const navLinks = [...document.querySelectorAll("[data-nav-link]")];

  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const savedTheme = window.localStorage.getItem("theme");

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    if (toggle) {
      const isDark = theme === "dark";
      toggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
      toggle.setAttribute("title", `Switch to ${isDark ? "light" : "dark"} mode`);
    }
  };

  applyTheme(savedTheme || (preferredTheme.matches ? "dark" : "light"));

  toggle?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  });

  preferredTheme.addEventListener("change", (event) => {
    if (!window.localStorage.getItem("theme")) applyTheme(event.matches ? "dark" : "light");
  });

  const closeNavigation = () => {
    header?.removeAttribute("data-nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  };

  navToggle?.addEventListener("click", () => {
    const isOpen = header?.getAttribute("data-nav-open") === "true";
    if (isOpen) {
      closeNavigation();
    } else {
      header?.setAttribute("data-nav-open", "true");
      navToggle.setAttribute("aria-expanded", "true");
    }
  });

  navLinks.forEach((link) => link.addEventListener("click", closeNavigation));

  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${visible.target.id}`;
          if (isActive) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
  });

  nav?.addEventListener("focusout", (event) => {
    if (!nav.contains(event.relatedTarget) && !navToggle?.contains(event.relatedTarget)) closeNavigation();
  });

  const previewAspectRatio = 615 / 792;
  const minPreviewWidth = 185;
  const maxPreviewShare = 0.4;
  const paperPreviews = [...document.querySelectorAll(".paper")];
  let previewSyncFrame;

  const syncPaperPreviews = () => {
    previewSyncFrame = undefined;
    const wideLayout = window.matchMedia("(min-width: 761px)").matches;

    paperPreviews.forEach((paper) => {
      const abstract = paper.querySelector(".paper__abstract");
      const body = paper.querySelector(".paper__body");
      const content = paper.querySelector(".paper__content");
      if (!abstract || !body || !content || !wideLayout) {
        paper.classList.remove("paper--stacked");
        paper.style.removeProperty("--paper-preview-width");
        return;
      }

      if (!abstract.open) return;

      // Widening the preview narrows the text column and makes it taller, so a one-shot
      // measurement can run away. Search for the narrowest preview whose height covers the
      // text; when none exists below the cap, stack the preview above the text instead.
      paper.classList.remove("paper--stacked");
      const coversText = (width) => {
        paper.style.setProperty("--paper-preview-width", `${width}px`);
        return width / previewAspectRatio >= body.getBoundingClientRect().height;
      };

      let low = minPreviewWidth;
      let high = Math.max(minPreviewWidth, Math.floor(content.clientWidth * maxPreviewShare));
      if (coversText(low)) {
        high = low;
      } else if (coversText(high)) {
        while (high - low > 1) {
          const middle = Math.floor((low + high) / 2);
          if (coversText(middle)) high = middle;
          else low = middle;
        }
      } else {
        paper.style.removeProperty("--paper-preview-width");
        paper.classList.add("paper--stacked");
        return;
      }

      paper.style.setProperty("--paper-preview-width", `${high}px`);
    });
  };

  const schedulePaperPreviewSync = () => {
    if (previewSyncFrame) return;
    previewSyncFrame = window.requestAnimationFrame(syncPaperPreviews);
  };

  if (paperPreviews.length && "ResizeObserver" in window) {
    const previewObserver = new ResizeObserver(schedulePaperPreviewSync);
    paperPreviews.forEach((paper) => {
      paper.querySelector(".paper__body") && previewObserver.observe(paper.querySelector(".paper__body"));
      paper.querySelector(".paper__abstract")?.addEventListener("toggle", schedulePaperPreviewSync);
    });
    window.addEventListener("resize", schedulePaperPreviewSync, { passive: true });
    schedulePaperPreviewSync();
  }
})();
