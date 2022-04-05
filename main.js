const btnScrollToTop = document.querySelector("#btn__scroll");
const hamburguesa = document.querySelector(".hamburguesa");
const navList = document.querySelector(".lista");

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
