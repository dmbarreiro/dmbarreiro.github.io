[].forEach.call(document.getElementsByClassName("js-Mailto"), function(el) {
  el.setAttribute("href", "mailto:" + el.getAttribute("data-mail-user") + "@" + (el.getAttribute("data-mail-domain") || window.location.host))
});

[].forEach.call(document.getElementsByClassName("js-Web"), function(el) {
  el.setAttribute("href", "https://" + el.getAttribute("data-domain") + '/' + (el.getAttribute("data-user")))
});