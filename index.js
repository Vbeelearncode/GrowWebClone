function toggleLanguageList() {
  var languageList = document.querySelector(
    "#language-dropdown .language-list"
  );
  if (
    languageList.style.display === "none" ||
    languageList.style.display === ""
  ) {
    languageList.style.display = "block";
  } else {
    languageList.style.display = "none";
  }
}

function selectLanguage(languageCode, languageName) {
  document.querySelector(".selected-language .flag-icon").className =
    "flag-icon fi fi-" + languageCode;
  document.querySelector(".selected-language .language-name").textContent =
    languageName;

  toggleLanguageList();
}
