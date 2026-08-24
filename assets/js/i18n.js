/*!
 * i18n.js — dvojezička podrška (srpski / engleski) preko JSON fajlova.
 * Prevodi se učitavaju sa assets/lang/sr.json i assets/lang/en.json.
 * NAPOMENA: fetch() lokalnih JSON fajlova radi samo kada se sajt otvara
 * preko http(s) servera (npr. GitHub Pages, ili lokalno "python -m http.server"),
 * a ne preko dvoklika na fajl (file://) zbog CORS pravila browsera.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "stayfit-settings";
  var cache = {};

  function readSettings() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function writeLang(lang) {
    var s = readSettings();
    s.lang = lang;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch (e) {}
  }

  function getPath(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && typeof acc === "object" ? acc[key] : undefined;
    }, obj);
  }

  function applyTranslations(dict) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = getPath(dict, key);
      if (typeof val === "string") el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      var val = getPath(dict, key);
      if (typeof val === "string") el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var val = getPath(dict, key);
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      var val = getPath(dict, key);
      if (typeof val === "string") el.setAttribute("aria-label", val);
    });
    document.documentElement.setAttribute("lang", dict.__lang || "sr");
  }

  function basePath() {
    var el = document.querySelector('script[data-i18n-base]');
    return el ? el.getAttribute('data-i18n-base') : "assets/lang/";
  }

  function loadLang(lang) {
    if (cache[lang]) {
      applyTranslations(cache[lang]);
      updateSwitcher(lang);
      return Promise.resolve(cache[lang]);
    }
    return fetch(basePath() + lang + ".json")
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(function (dict) {
        dict.__lang = lang;
        cache[lang] = dict;
        applyTranslations(dict);
        updateSwitcher(lang);
        return dict;
      })
      .catch(function (err) {
        console.warn("[StayFit i18n] Prevod nije mogao da se učita (" + lang + "). " +
          "Ako testirate sajt lokalno preko dvoklika na fajl, pokrenite lokalni server " +
          "(npr. `python -m http.server`) da bi fetch() JSON fajlova radio.", err);
      });
  }

  function updateSwitcher(lang) {
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.textContent = lang === "sr" ? "EN" : "SR";
      btn.setAttribute("aria-label", lang === "sr" ? "Switch to English" : "Prebaci na srpski");
    });
  }

  window.StayFitI18n = { load: loadLang };

  document.addEventListener("DOMContentLoaded", function () {
    var settings = readSettings();
    var lang = settings.lang || "sr";
    loadLang(lang);

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var current = readSettings().lang || "sr";
        var next = current === "sr" ? "en" : "sr";
        writeLang(next);
        loadLang(next);
      });
    });
  });
})();
