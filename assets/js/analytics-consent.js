(() => {
  const measurementId = document.currentScript?.dataset.measurementId;
  if (!/^G-[A-Z0-9]+$/.test(measurementId || "")) return;

  const storageKey = "mdv-analytics-consent";
  const banner = document.querySelector("[data-analytics-consent]");
  const accept = banner?.querySelector("[data-analytics-accept]");
  const decline = banner?.querySelector("[data-analytics-decline]");
  const disableKey = `ga-disable-${measurementId}`;
  let choice;

  try {
    choice = localStorage.getItem(storageKey);
  } catch {
    choice = null;
  }

  const loadAnalytics = () => {
    window[disableKey] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", measurementId);

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
      localStorage.setItem(storageKey, value);
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
