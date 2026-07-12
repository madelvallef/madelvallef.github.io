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
  const paperPreviews = [...document.querySelectorAll(".paper")];
  let previewSyncFrame;

  const syncPaperPreviews = () => {
    previewSyncFrame = undefined;
    const wideLayout = window.matchMedia("(min-width: 761px)").matches;

    paperPreviews.forEach((paper) => {
      const abstract = paper.querySelector(".paper__abstract");
      if (!abstract || !wideLayout) {
        paper.style.removeProperty("--paper-preview-width");
        return;
      }

      if (!abstract.open) return;

      const targetWidth = Math.ceil(abstract.getBoundingClientRect().height * previewAspectRatio);
      const currentWidth = Number.parseFloat(paper.style.getPropertyValue("--paper-preview-width"));

      if (!Number.isFinite(currentWidth) || Math.abs(targetWidth - currentWidth) > 1) {
        paper.style.setProperty("--paper-preview-width", `${targetWidth}px`);
      }
    });
  };

  const schedulePaperPreviewSync = () => {
    if (previewSyncFrame) return;
    previewSyncFrame = window.requestAnimationFrame(syncPaperPreviews);
  };

  if (paperPreviews.length && "ResizeObserver" in window) {
    const previewObserver = new ResizeObserver(schedulePaperPreviewSync);
    paperPreviews.forEach((paper) => {
      paper.querySelector(".paper__abstract") && previewObserver.observe(paper.querySelector(".paper__abstract"));
      paper.querySelector(".paper__abstract")?.addEventListener("toggle", schedulePaperPreviewSync);
    });
    window.addEventListener("resize", schedulePaperPreviewSync, { passive: true });
    schedulePaperPreviewSync();
  }
})();
