const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const mediaTrack = document.querySelector(".media-track");
if (mediaTrack) {
  const originalCards = Array.from(mediaTrack.children);
  originalCards.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.classList.add("is-visible");
    mediaTrack.appendChild(clone);
  });
}

const revealItems = document.querySelectorAll(".reveal");
const navToggle = document.querySelector(".nav-toggle");
const mobileNavPanel = document.querySelector("#mobile-nav-panel");
const desktopDropdowns = document.querySelectorAll(".site-nav .nav-dropdown");
const desktopNavTriggers = document.querySelectorAll(".site-nav .nav-trigger");
const mobileNavGroups = document.querySelectorAll(".mobile-nav-group");
const faqButtons = document.querySelectorAll("[data-faq-button]");
const langOptions = document.querySelectorAll("[data-lang-option]");

if (faqButtons.length > 0) {
  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const panelId = button.getAttribute("aria-controls");
      if (!panelId) {
        return;
      }

      const panel = document.getElementById(panelId);
      const item = button.closest(".faq-item");
      if (!panel || !item) {
        return;
      }

      const willOpen = button.getAttribute("aria-expanded") !== "true";

      faqButtons.forEach((otherButton) => {
        const otherPanelId = otherButton.getAttribute("aria-controls");
        if (!otherPanelId) {
          return;
        }

        const otherPanel = document.getElementById(otherPanelId);
        const otherItem = otherButton.closest(".faq-item");
        if (!otherPanel || !otherItem) {
          return;
        }

        const isTarget = otherButton === button;
        otherButton.setAttribute("aria-expanded", String(isTarget && willOpen));
        otherPanel.setAttribute("aria-hidden", String(!(isTarget && willOpen)));
        otherItem.classList.toggle("is-open", isTarget && willOpen);
      });
    });
  });
}

if (desktopDropdowns.length > 0) {
  desktopNavTriggers.forEach((trigger) => {
    trigger.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse") {
        event.preventDefault();
      }
    });
  });

  desktopDropdowns.forEach((dropdown) => {
    dropdown.addEventListener("pointerenter", () => {
      const active = document.activeElement;
      if (active && active.closest(".site-nav") && !dropdown.contains(active)) {
        active.blur();
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    const active = document.activeElement;
    if (active && active.closest(".site-nav")) {
      active.blur();
    }
  });
}

if (mobileNavGroups.length > 1) {
  document.addEventListener("click", (event) => {
    const summary = event.target.closest(".mobile-nav-group summary");
    if (!summary) {
      return;
    }

    const group = summary.parentElement;
    if (!(group instanceof HTMLDetailsElement)) {
      return;
    }

    const willOpen = !group.open;
    if (!willOpen) {
      return;
    }

    document.querySelectorAll(".mobile-nav-group").forEach((other) => {
      if (other !== group) {
        other.open = false;
      }
    });
  });
}

if (langOptions.length > 0) {
  const supportedLangs = new Set(["en", "zh-Hant", "zh-Hans"]);

  const applyLanguageSelection = (lang) => {
    if (!supportedLangs.has(lang)) {
      return;
    }

    langOptions.forEach((option) => {
      const isActive = option.getAttribute("data-lang-option") === lang;
      option.classList.toggle("is-active", isActive);
      option.setAttribute("aria-pressed", String(isActive));
    });

    document.documentElement.lang = lang;
  };

  let initialLang = "en";
  try {
    const storedLang = window.localStorage.getItem("turoid-lang");
    if (storedLang && supportedLangs.has(storedLang)) {
      initialLang = storedLang;
    }
  } catch (_) {
    // ignore storage errors
  }

  applyLanguageSelection(initialLang);

  langOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const lang = option.getAttribute("data-lang-option") || "en";
      applyLanguageSelection(lang);
      try {
        window.localStorage.setItem("turoid-lang", lang);
      } catch (_) {
        // ignore storage errors
      }
    });
  });
}

if (navToggle && mobileNavPanel) {
  const setMobileNavState = (isOpen) => {
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close mobile menu" : "Open mobile menu");
    mobileNavPanel.classList.toggle("is-open", isOpen);
    mobileNavPanel.setAttribute("aria-hidden", String(!isOpen));
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setMobileNavState(!isOpen);
  });

  const syncMobilePanelForViewport = () => {
    if (window.matchMedia("(min-width: 981px)").matches) {
      setMobileNavState(false);
    }
  };

  syncMobilePanelForViewport();
  window.addEventListener("resize", syncMobilePanelForViewport);

  mobileNavPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMobileNavState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMobileNavState(false);
    }
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const assessmentForm = document.querySelector("[data-assessment-form]");
const assessmentResult = document.querySelector("[data-assessment-result]");

const trackEvent = (eventName, params = {}) => {
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
      return;
    }
  } catch (_) {
    // ignore
  }

  try {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: eventName, ...params });
      return;
    }
  } catch (_) {
    // ignore
  }
};

document.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) {
    return;
  }

  const track = link.getAttribute("data-track");
  if (track) {
    trackEvent(track, {
      link_url: link.href,
      link_text: (link.textContent || "").trim().slice(0, 120),
      page_path: window.location.pathname,
    });
    return;
  }

  if (link.href.startsWith("mailto:")) {
    trackEvent("email_click", { link_url: link.href, page_path: window.location.pathname });
    return;
  }

  if (link.href.includes("wa.me/")) {
    trackEvent("whatsapp_click", { link_url: link.href, page_path: window.location.pathname });
  }
});

if (assessmentForm && assessmentResult) {
  const scoreNode = assessmentResult.querySelector("[data-score]");
  const titleNode = assessmentResult.querySelector("[data-result-title]");
  const copyNode = assessmentResult.querySelector("[data-result-copy]");

  const results = [
    {
      max: 3,
      title: "Level 1: Controlled stack",
      copy:
        "Your current stack may be workable. Focus on making data and documents AI-ready before complexity grows.",
    },
    {
      max: 7,
      title: "Level 2: Reporting strain",
      copy:
        "Your team likely spends too much time on recurring consolidation, reporting, and document handling. A focused reporting layer would help.",
    },
    {
      max: 10,
      title: "Level 3: Operating bottleneck",
      copy:
        "Manual workflows are probably limiting scale, auditability, and decision context. This is where family office software starts to pay for itself.",
    },
    {
      max: 12,
      title: "Level 4: AI-ready problem",
      copy:
        "The pain is large enough for a proper operating layer across data, alts, documents, controls, and CIO Copilot workflows.",
    },
  ];

  const updateAssessment = () => {
    const formData = new FormData(assessmentForm);
    let score = 0;

    for (const value of formData.values()) {
      score += Number(value);
    }

    const result = results.find((item) => score <= item.max) || results[results.length - 1];

    scoreNode.textContent = score;
    titleNode.textContent = result.title;
    copyNode.textContent = result.copy;
  };

  assessmentForm.addEventListener("change", updateAssessment);
  updateAssessment();
}
