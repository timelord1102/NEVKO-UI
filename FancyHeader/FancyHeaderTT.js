new MutationObserver((mutations) => {
	mutations.forEach(function(mutation) {
		mutation.addedNodes.forEach(function(addedNode) {
			if (addedNode.classList && addedNode.classList.contains('_3mz8wQ6Q44B8P7pzPP4Iyw')) {
				const title_bar_controls = document.querySelector('._3cykd-VfN_xBxf3Qxriccm')
				const bottom_bar_controls = document.querySelector('._1_yS5UP7el0aN4vntx3dx')	
				changeOffset(bottom_bar_controls, title_bar_controls.offsetWidth)
				new MutationObserver((mutationsList) => {
					for (const _ of mutationsList) {
						changeOffset(bottom_bar_controls, title_bar_controls.offsetWidth)
					}
				}).observe(title_bar_controls, { attributes: true, childList: true, subtree: true, characterData: true });
			}
		});
	});
}).observe(document.body, { childList: true, subtree: true });

function changeOffset(bottom, offsetWidth) {
	bottom.style.setProperty('right', `${offsetWidth + 121}px`, 'important')
};

		// Activity Button - motionarium & dotfelixan сode
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