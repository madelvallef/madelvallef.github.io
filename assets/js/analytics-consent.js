(() => {
  const measurementId = document.currentScript?.dataset.measurementId;
  if (!/^G-[A-Z0-9]+$/.test(measurementId || "")) return;

  const storageKey = "mdv-analytics-consent";
  const consentMaxAge = 180 * 24 * 60 * 60 * 1000;
  const banner = document.querySelector("[data-analytics-consent]");
  const accept = banner?.querySelector("[data-analytics-accept]");
  const decline = banner?.querySelector("[data-analytics-decline]");
  const disableKey = `ga-disable-${measurementId}`;
  let choice = null;

  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === "granted" || stored === "denied") {
      choice = stored;
      localStorage.setItem(storageKey, JSON.stringify({ value: stored, savedAt: Date.now() }));
    } else if (stored) {
      const record = JSON.parse(stored);
      if ((record.value === "granted" || record.value === "denied") && Date.now() - record.savedAt < consentMaxAge) {
        choice = record.value;
      } else {
        localStorage.removeItem(storageKey);
      }
    }
  } catch {
    choice = null;
  }

  const loadAnalytics = () => {
    if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) return;
    window[disableKey] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("consent", "default", {
      ad_personalization: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      analytics_storage: "granted",
    });
    window.gtag("config", measurementId, {
      allow_ad_personalization_signals: false,
      allow_google_signals: false,
      cookie_expires: 90 * 24 * 60 * 60,
      cookie_update: false,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  };

  if (choice === "granted") {
    loadAnalytics();
  } else {
    window[disableKey] = true;
    if (choice !== "denied" && banner) banner.hidden = false;
  }

  const saveChoice = (value) => {
    let saved = false;
    try {
      localStorage.setItem(storageKey, JSON.stringify({ value, savedAt: Date.now() }));
      saved = true;
    } catch {
      // The current page still honors the choice if storage is unavailable.
    }
    if (banner) banner.hidden = true;
    if (value === "granted") {
      if (choice !== "granted") loadAnalytics();
    } else {
      window[disableKey] = true;
      if (choice === "granted" && saved) window.location.reload();
    }
    choice = value;
  };

  accept?.addEventListener("click", () => saveChoice("granted"));
  decline?.addEventListener("click", () => saveChoice("denied"));
  document.querySelectorAll("[data-analytics-settings]").forEach((button) => {
    button.addEventListener("click", () => {
      if (banner) banner.hidden = false;
      accept?.focus();
    });
  });
})();
