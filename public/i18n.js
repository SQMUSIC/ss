import { translations } from "../src/i18n.js";

function applyLang(lang) {
  localStorage.setItem("lang", lang);

  // TEXT
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });

  // PLACEHOLDER
  document.querySelectorAll("[data-placeholder-i18n]").forEach(el => {
    const key = el.getAttribute("data-placeholder-i18n");
    if (translations[lang]?.[key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // LANG HTML TAG
  document.documentElement.lang = lang;
}

function initI18n() {
  const select = document.querySelector(".language-select");
  if (!select) return;

  const saved = localStorage.getItem("lang") || "en";

  select.value = saved;
  applyLang(saved);

  select.addEventListener("change", (e) => {
    applyLang(e.target.value);
  });
}

// 🔥 ВАЖНО: запускаем только после полной загрузки DOM
window.addEventListener("DOMContentLoaded", initI18n);
