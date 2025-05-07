new WOW().init();
  const toTop = document.getElementById("toTop");
  window.addEventListener("scroll", () => {
    toTop.style.display = window.scrollY > 300 ? "block" : "none";
  });
  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });