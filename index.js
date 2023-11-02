let note = document.querySelector(".subcontainer");
let add = document.querySelectorAll(".btn");
let away = document.querySelector(".away");

function open() {
  note.classList.add("flex");
}
for (let i = 0; i < add.length; i++) {
  add[i].onclick = open;
}

function displayback() {
  note.classList.remove("flex");
}
away.onclick = displayback;
