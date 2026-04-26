const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll(".reveal");

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
