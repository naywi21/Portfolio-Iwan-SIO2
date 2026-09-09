/* =========================================================
   Portfolio BTS SIO — Iwan Jacquin
   Scripts : navigation, thème, animations
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.querySelector(".nav__menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Lien de navigation actif ---------- */
  var current = document.body.getAttribute("data-page");
  document.querySelectorAll(".nav__link").forEach(function (link) {
    if (link.getAttribute("data-nav") === current) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  /* ---------- Thème clair / sombre ---------- */
  var root = document.documentElement;
  var themeBtn = document.querySelector(".theme-toggle");
  var stored = null;
  try {
    stored = localStorage.getItem("portfolio-theme");
  } catch (e) {}

  if (stored) {
    root.setAttribute("data-theme", stored);
  }

  function updateThemeLabel() {
    if (!themeBtn) return;
    var isLight = root.getAttribute("data-theme") === "light";
    themeBtn.textContent = isLight ? "☾" : "☀";
    themeBtn.setAttribute(
      "aria-label",
      isLight ? "Activer le thème sombre" : "Activer le thème clair"
    );
  }
  updateThemeLabel();

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("portfolio-theme", next);
      } catch (e) {}
      updateThemeLabel();
    });
  }

  /* ---------- Animations d'apparition au scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");

            /* Barres de compétences */
            entry.target.querySelectorAll(".skill__fill").forEach(function (bar) {
              var lvl = bar.getAttribute("data-level") || "0";
              bar.style.width = lvl + "%";
            });

            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
      el.querySelectorAll(".skill__fill").forEach(function (bar) {
        bar.style.width = (bar.getAttribute("data-level") || "0") + "%";
      });
    });
  }

  /* ---------- Bouton retour en haut ---------- */
  var toTop = document.querySelector(".to-top");
  if (toTop) {
    window.addEventListener(
      "scroll",
      function () {
        toTop.classList.toggle("is-visible", window.scrollY > 500);
      },
      { passive: true }
    );

    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Année du footer ---------- */
  var yearEl = document.querySelector(".footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
