/*!
 * theme.js — tamna/svetla tema i veličina fonta (pristupačnost)
 * Podešavanja se čuvaju u localStorage (ključ "stayfit-settings").
 */
(function () {
  "use strict";

  var STORAGE_KEY = "stayfit-settings";

  function readSettings() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      /* localStorage može biti nedostupan (privatni mod) - koristi podrazumevano */
    }
    return {};
  }

  function writeSettings(settings) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      /* tiho zanemari - sajt i dalje radi, samo se podešavanje ne pamti */
    }
  }

  var settings = readSettings();
  window.StayFitSettings = settings;

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    settings.theme = theme;
    writeSettings(settings);
    document.dispatchEvent(new CustomEvent("stayfit:theme-changed", { detail: { theme: theme } }));
  }

  function applyFontSize(size) {
    document.documentElement.classList.remove("font-md", "font-lg");
    if (size === "md") document.documentElement.classList.add("font-md");
    if (size === "lg") document.documentElement.classList.add("font-lg");
    settings.fontSize = size;
    writeSettings(settings);
  }

  window.StayFitTheme = { applyTheme: applyTheme, applyFontSize: applyFontSize };

  document.addEventListener("DOMContentLoaded", function () {
    var themeBtn = document.getElementById("themeToggle");
    var themeIconSun = document.getElementById("themeIconSun");
    var themeIconMoon = document.getElementById("themeIconMoon");

    function reflectThemeIcon(theme) {
      if (!themeIconSun || !themeIconMoon) return;
      var isLight = theme === "light";
      themeIconSun.style.display = isLight ? "none" : "block";
      themeIconMoon.style.display = isLight ? "block" : "none";
    }

    reflectThemeIcon(document.documentElement.getAttribute("data-theme") || "dark");

    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-theme") || "dark";
        var next = current === "dark" ? "light" : "dark";
        applyTheme(next);
        reflectThemeIcon(next);
      });
    }

    var fontButtons = document.querySelectorAll("[data-fontsize]");
    var activeSize = settings.fontSize || "sm";

    function reflectFontButtons(size) {
      fontButtons.forEach(function (btn) {
        btn.classList.toggle("is-active", btn.getAttribute("data-fontsize") === size);
        btn.setAttribute("aria-pressed", btn.getAttribute("data-fontsize") === size ? "true" : "false");
      });
    }

    reflectFontButtons(activeSize);

    fontButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var size = btn.getAttribute("data-fontsize");
        applyFontSize(size);
        reflectFontButtons(size);
      });
    });
  });
})();
