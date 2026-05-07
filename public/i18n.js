const translations = {
  en: {
    home: "Home",
    blog: "Blog",
    about: "About",
    shop: "Shop",
    contact: "Contact",
    shop_title: "Shop",
    shop_text: "My store is below",
    contact_title: "Contact",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Send"
  },

  fr: {
    home: "Accueil",
    blog: "Blog",
    about: "À propos",
    shop: "Boutique",
    contact: "Contact",
    shop_title: "Boutique",
    shop_text: "Ma boutique est ci-dessous",
    contact_title: "Contact",
    contact_name: "Nom",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Envoyer"
  },

  ru: {
    home: "Главная",
    blog: "Блог",
    about: "О нас",
    shop: "Магазин",
    contact: "Контакты",
    shop_title: "Магазин",
    shop_text: "Мой магазин ниже",
    contact_title: "Контакт",
    contact_name: "Имя",
    contact_email: "Почта",
    contact_message: "Сообщение",
    contact_send: "Отправить"
  }
};

function applyLang(lang) {
  localStorage.setItem("lang", lang);

  const all = document.querySelectorAll("[data-i18n]");
  const allPlaceholders = document.querySelectorAll("[data-placeholder-i18n]");

  all.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });

  allPlaceholders.forEach(el => {
    const key = el.getAttribute("data-placeholder-i18n");
    if (translations[lang]?.[key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });
}

// 🚀 ВАЖНО: НЕ DOMContentLoaded
// запускаем с задержкой, чтобы Astro всё дорендерил

function init() {
  const select = document.querySelector(".language-select");
  if (!select) return;

  const saved = localStorage.getItem("lang") || "en";
  select.value = saved;

  applyLang(saved);

  select.addEventListener("change", (e) => {
    applyLang(e.target.value);
  });
}

// запускаем 2 раза для надёжности
window.addEventListener("load", init);
setTimeout(init, 300);
