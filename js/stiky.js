window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("stiky", window.scrollY > 0)
  })