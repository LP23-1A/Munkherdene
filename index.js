let modal = document.querySelector(".subcontainer");
let add = document.querySelectorAll(".btn");

let away = document.querySelector(".away");

function openModal() {
  modal.classList.add("flex");
}

function backDisplay() {
  modal.classList.remove("flex");
}

for (let i = 0; i < add.length; i++) {
  add[i].onclick = openModal;
}

away.onclick = backDisplay;
