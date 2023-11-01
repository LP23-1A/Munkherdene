let modal = document.querySelector(".subcontainer");
let add = document.querySelectorAll(".btn");

let away = document.querySelector(".away");

function open() {
  modal.classList.add("flex");
}

function displayback() {
  modal.classList.remove("flex");
}

for (let i = 0; i < add.length; i++) {
  add[i].onclick = open;
}

away.onclick = displayback;
