const btnScrollToTop = document.querySelector("#btn__scroll");
const hamburguesa = document.querySelector(".hamburguesa");
const navList = document.querySelector(".lista");
const background = document.querySelector(".hoja__rota");

const formulario = document.querySelector(".form");

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
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

formulario.addEventListener("submit", enviarManual);

async function enviarManual(event) {
  event.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
    alert("Mensaje Enviado");
  }
}
