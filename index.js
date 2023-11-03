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

function addCard() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const status = document.getElementById("status").value;
  const priority = document.getElementById("priority").value;

  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
<div class="icon">
<i class="fa fa-check" aria-hidden="true"></i>
</div>
<div class="texts">
<h4>${title}</h4>
<p>${description}</p>
<div class="text">${priority}</div>
</div>
<div class="icons">
<div class="icon">
<i class="fa fa-close" aria-hidden="true"></i>
</div>
<div class="icon">
<i class="fa fa-edit" aria-hidden="true"></i>
</div>
</div> `;
  const panel = document.querySelector("div");
  panel.querySelector(".cards").appendChild(card);
}
