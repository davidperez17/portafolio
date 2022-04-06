const btnScrollToTop = document.querySelector("#btn__scroll");
const hamburguesa = document.querySelector(".hamburguesa");
const navList = document.querySelector(".lista");
const background = document.querySelector(".hoja__rota");

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

hamburguesa.addEventListener("click", function () {
  this.classList.toggle("is-active");
});

navList.addEventListener("click", function () {
  this.classList.toggle("is-active");
});

hamburguesa.addEventListener("click", () => {
  navList.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  const scroll = window.pageYOffset;
  background.style.top = scroll / -2.5 + "px";
});
