(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var nav = document.querySelector(".site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var backdrop = document.querySelector(".nav-backdrop");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function setScrolled() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  setScrolled();
  window.addEventListener("scroll", setScrolled, { passive: true });

  function closeMenu() {
    if (!nav || !toggle) return;
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }

  function openMenu() {
    if (!nav || !toggle) return;
    nav.classList.add("is-open");
    document.body.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
      closeMenu();
      if (toggle) toggle.focus();
    }
  });

  var form = document.getElementById("contact-form");
  var success = document.getElementById("form-success");
  if (form && success) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      success.classList.add("is-visible");
      if (typeof success.focus === "function") {
        success.setAttribute("tabindex", "-1");
        success.focus();
      }
      form.reset();
    });
  }
})();
