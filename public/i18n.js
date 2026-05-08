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

  // 🔥 ПЕРЕВОД ВСЕГО СТРАНИЦЫ КАЖДЫЙ РАЗ
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-placeholder-i18n]").forEach(el => {
    const key = el.getAttribute("data-placeholder-i18n");
    if (translations[lang]?.[key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });
}

function init() {
  const select = document.querySelector(".language-select");
  if (!select) return;

  const saved = localStorage.getItem("lang") || navigator.language.slice(0, 2) || "en";

  select.value = saved;

  // 💥 важно: применяем сразу
  applyLang(saved);

  // 💥 при смене языка — ПЕРЕПЕРЕВОД ВСЕГО САЙТА
  select.addEventListener("change", (e) => {
    applyLang(e.target.value);
  });

  // 🔥 страховка: повторный запуск через небольшую задержку
  setTimeout(() => applyLang(select.value), 300);
}

// 🚀 ждём когда Astro полностью отрисует страницу
document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", init);
