const translations = {
  ru: "Активности",
  en: "Activities",
  es: "Actividades",
  de: "Aktivitäten",
  fr: "Activités",
  it: "Attività",
  pt: "Atividades",
  nl: "Activiteiten",
  pl: "Aktywności",
  uk: "Діяльність",
  zh: "活动",
  ja: "アクティビティ",
  ko: "활동",
  ar: "الأنشطة",
  hi: "गतिविधियाँ",
  tr: "Etkinlikler",
  sv: "Aktiviteter",
  da: "Aktiviteter",
  fi: "Aktiviteetit",
  no: "Aktiviteter",
};

function getCurrentLanguage() {
  let lang = document.documentElement.lang;
  
  if (!lang) {
    const metaLang = document.querySelector('meta[name="language"]');
    if (metaLang) {
      lang = metaLang.getAttribute('content');
    }
  }
  
  if (!lang) {
    lang = navigator.language || navigator.userLanguage;
  }
  
  return lang.split('-')[0];
}

function getTranslation(lang) {
  return translations[lang] || translations.en;
}

function setLanguage() {
  const currentLang = getCurrentLanguage();
  const translatedText = getTranslation(currentLang);
  main_acc.innerHTML = translatedText;
}

let main = document.getElementsByClassName("HoGkIKTQnkTEFGjqO-GMl");
let main_acc = document.getElementsByClassName('_2jXHP0742MyApMUVUM8IFn')[0].cloneNode(true);
let hr_acc = document.getElementsByClassName('_2jXHP0742MyApMUVUM8IFn')[4].cloneNode(true);

setLanguage();

main_acc.addEventListener('click', function(event) {
    event.preventDefault();
    window.location = 'steam://url/SteamIDFriendsPage';
});

main[0].insertBefore(hr_acc, main[0].firstElementChild);
main[0].insertBefore(main_acc, main[0].firstElementChild);

document.addEventListener('languagechange', setLanguage);

function changeLanguage(lang) {
  document.documentElement.lang = lang;
  setLanguage();
}