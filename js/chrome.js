(function () {
  "use strict";

  var NAV = [
    { href: "index.html", label: "Home" },
    { href: "mass-times.html", label: "Mass" },
    { href: "bulletin.html", label: "Bulletin" },
    { href: "donate.html", label: "Give" },
    { href: "contact.html", label: "Contact", cta: true }
  ];

  function currentFile() {
    var p = window.location.pathname || "";
    var seg = p.split("/").pop();
    if (!seg || seg === "") return "index.html";
    return seg;
  }

  function isCurrent(href, file) {
    if (href === "index.html") {
      return file === "index.html" || file === "";
    }
    return href === file;
  }

  function buildHeader() {
    var file = currentFile();
    var navLi = NAV.map(function (item) {
      var cur = isCurrent(item.href, file) ? ' aria-current="page"' : "";
      var cls = item.cta ? "nav-cta" : "";
      return (
        "<li><a class=\"" +
        cls +
        "\" href=\"" +
        item.href +
        "\"" +
        cur +
        ">" +
        item.label +
        "</a></li>"
      );
    }).join("");

    return (
      "<a class=\"skip-link\" href=\"#main\">Skip to main content</a>" +
      "<header class=\"site-header\" id=\"top\">" +
      "<div class=\"header-inner\">" +
      "<a class=\"logo\" href=\"index.html\" aria-label=\"St. George Church, Palapuram — home\">" +
      "<span class=\"logo-mark\" aria-hidden=\"true\">" +
      "<img src=\"images/cross-mark.svg\" width=\"44\" height=\"44\" alt=\"\" decoding=\"async\">" +
      "</span>" +
      "<span class=\"logo-text\">" +
      "<span class=\"logo-name\">St. George Church</span>" +
      "<span class=\"logo-tag\">Palapuram, Kerala · Syro-Malabar Catholic</span>" +
      "</span></a>" +
      "<button type=\"button\" class=\"nav-toggle\" aria-expanded=\"false\" aria-controls=\"site-nav\" aria-label=\"Open menu\">" +
      "<span class=\"nav-toggle-bar\"></span><span class=\"nav-toggle-bar\"></span><span class=\"nav-toggle-bar\"></span>" +
      "</button>" +
      "<nav class=\"site-nav\" id=\"site-nav\" aria-label=\"Primary\">" +
      "<ul class=\"nav-list\">" +
      navLi +
      "</ul></nav>" +
      "<div class=\"nav-backdrop\" aria-hidden=\"true\"></div>" +
      "</div></header>"
    );
  }

  function buildFooter() {
    return (
      "<footer class=\"site-footer\">" +
      "<div class=\"container footer-inner\">" +
      "<div class=\"footer-brand\">" +
      "<span class=\"logo-mark\" aria-hidden=\"true\">" +
      "<img src=\"images/cross-mark.svg\" width=\"40\" height=\"40\" alt=\"\" decoding=\"async\">" +
      "</span>" +
      "<div><strong>St. George Church</strong>" +
      "<p>Palapuram, Kerala · Syro-Malabar Catholic Archdiocese of Thrissur</p></div></div>" +
      "<nav class=\"footer-nav\" aria-label=\"Footer\">" +
      "<a href=\"index.html\">Home</a>" +
      "<a href=\"mass-times.html\">Mass</a>" +
      "<a href=\"contact.html\">Contact</a>" +
      "</nav>" +
      "<p class=\"footer-copy\">© <span id=\"year\"></span> St. George Church, Palapuram. Built with reverence and care.</p>" +
      "</div></footer>"
    );
  }

  var h = document.getElementById("site-header-root");
  var f = document.getElementById("site-footer-root");
  if (h) h.innerHTML = buildHeader();
  if (f) f.innerHTML = buildFooter();
})();
