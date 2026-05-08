const translations = {
  en: {
    home: "Home",
    blog: "Blog",
    about: "About",
    shop: "Shop",
    contact: "Contact",
    "SQMUSIC™": "SQMUSIC™",
    "Shop": "Shop",
    "Contact": "Contact",
    "My store is below": "My store is below",
    "Contact": "Contact",
    "Send": "Send",
    "Name": "Name",
    "Email": "Email",
    "Message": "Message"
  },

  fr: {
    home: "Accueil",
    blog: "Blog",
    about: "À propos",
    shop: "Boutique",
    contact: "Contact",
    "SQMUSIC™": "SQMUSIC™",
    "Shop": "Boutique",
    "Contact": "Contact",
    "My store is below": "Ma boutique est ci-dessous",
    "Send": "Envoyer",
    "Name": "Nom",
    "Email": "Email",
    "Message": "Message"
  },

  ru: {
    home: "Главная",
    blog: "Блог",
    about: "О нас",
    shop: "Магазин",
    contact: "Контакты",
    "SQMUSIC™": "SQMUSIC™",
    "Shop": "Магазин",
    "Contact": "Контакт",
    "My store is below": "Мой магазин ниже",
    "Send": "Отправить",
    "Name": "Имя",
    "Email": "Почта",
    "Message": "Сообщение"
  }
};

function translateTextNodes(lang) {
  const dict = translations[lang] || {};

  function walk(node) {
    if (!node) return;

    // пропускаем ненужное
    if (
      node.nodeType === 1 &&
      ["SCRIPT", "STYLE", "TEXTAREA", "INPUT"].includes(node.tagName)
    ) {
      return;
    }

    // текстовые узлы
    if (node.nodeType === 3) {
      const text = node.nodeValue.trim();

      if (dict[text]) {
        node.nodeValue = dict[text];
      }
    }

    node.childNodes.forEach(walk);
  }

  walk(document.body);
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  translateTextNodes(lang);
}

function init() {
  const select = document.querySelector(".language-select");
  if (!select) return;

  const saved =
    localStorage.getItem("lang") ||
    navigator.language.slice(0, 2) ||
    "en";

  select.value = saved;

  setLang(saved);

  select.addEventListener("change", (e) => {
    setLang(e.target.value);
  });
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", init);
