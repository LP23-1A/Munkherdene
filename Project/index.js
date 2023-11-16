const note = document.querySelector(".subcontainer");
const add = document.querySelector(".btn");
const away = document.querySelector(".away");
const cardForm = document.getElementById("card-form");

const statusSelect = document.getElementById("status");
function openNote() {
  note.style.display = "flex";
}
add.addEventListener("click", openNote);
function closeNote() {
  note.style.display = "none";
}
away.addEventListener("click", closeNote);

const cardsData = [];
function addCard() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const status = statusSelect.value;
  const priority = document.getElementById("priority").value;
  const newCard = {
    title: title,
    description: description,
    status: status,
    priority: priority,
  };
  cardsData.push(newCard);
  cardForm.reset();
  closeNote();
  renderCards();
  updateCardsCount();
}
function renderCards() {
  const cardsContainers = document.querySelectorAll(".cards");

  cardsContainers.forEach((cardsContainer) => {
    cardsContainer.innerHTML = "";
  });
  cardsData.forEach((card, index) => {
    const cardHtml = createCardHtml(card, index);

    cardsContainers[getStatusIndex(card.status)].innerHTML += cardHtml;
  });
}
function createCardHtml(card, index) {
  return `
    <div class="card" draggable="true" id="test" data-id="${index}">
        <div class="icon">
            <i class="fa fa-check" onclick="movecard(${index})" aria-hidden="true"></i>
        </div>
        <div class="texts">
            <h4>${card.title}</h4>
            <p>${card.description}</p>
            <div class="text">${card.priority}</div>
        </div>
        <div class="icons">
            <div class="icon">
                <i class="fa fa-close" aria-hidden="true" onclick="removeCard(${index})"></i>
            </div>
            <div class="icon">
                <i class="fa fa-edit" aria-hidden="true" onclick="editCard(${index})"></i>
            </div>
        </div>
    </div>
    `;
}
function getStatusIndex(status) {
  let statuses = ["To do", "In progress", "Stuck", "Done"];
  return statuses.indexOf(status);
}
renderCards();
const lastCard = cardsData[cardsData.length - 1];
if (lastCard) {
  const statusIndex = getStatusIndex(lastCard.status);
  if (statusIndex == 1) {
    const cardsContainer = document.querySelectorAll(".cards");
    const cardHtml = createCardHtml(lastCard, cardsData.length - 1);
    cardsContainer.innerHTML += cardHtml;
  }
}

function removeCard(index) {
  cardsData.splice(index, 1);
  renderCards();
  updateCardsCount();
}
cardForm.addEventListener("submit", function (element) {
  element.preventDefault();
  addCard();
});

let editingCardIndex = null;
function editCard(index) {
  editingCardIndex = index;
  const cardToEdit = cardsData[index];
  document.getElementById("title").value = cardToEdit.title;
  document.getElementById("description").value = cardToEdit.description;
  document.getElementById("status").value = cardToEdit.status;
  document.getElementById("priority").value = cardToEdit.priority;

  openNote();
}
function updateCard() {
  const cardToEdit = cardsData[editingCardIndex];
  cardToEdit.title = document.getElementById("title").value;
  cardToEdit.description = document.getElementById("description").value;
  cardToEdit.status = document.getElementById("status").value;
  cardToEdit.priority = document.getElementById("priority").value;

  cardForm.reset();
  closeNote();
  editingCardIndex = null;
  renderCards();
  updateCardsCount();
}

document.getElementById("button").addEventListener("click", function (e) {
  e.preventDefault();
  if (editingCardIndex !== null) {
    updateCard();
  } else {
    addCard();
  }
});
function movecard(index) {
  const movecard = cardsData.splice(index, 1)[0];
  movecard.status = "Done";
  cardsData.push(movecard);
  renderCards();
  updateCardsCount();
}
function updateCardsCount() {
  const panels = document.querySelectorAll(".panel");
  panels.forEach((panel) => {
    const cardsCount = panel.querySelectorAll(".card").length;
    const numbersElement = panel.querySelector(".numbers");
    if (numbersElement) {
      numbersElement.textContent = cardsCount;
    }
  });
}
let panel = document.querySelectorAll(".panel");
let card = document.querySelectorAll(".cards");
let draggedItem = null;
card.forEach((card) => {
  card.addEventListener("dragstart", (event) => {
    draggedItem = event.target;
    event.dataTransfer.setData("text", event.target.getAttribute("data-id"));
  });
  card.addEventListener("dragend", () => {
    draggedItem = null;
  });
});
panel.forEach((panel) => {
  panel.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  panel.addEventListener("dragenter", (event) => {
    event.preventDefault();
    if (draggedItem) {
      const draggingcards = draggedItem.parentNode;
      if (draggingcards !== event.currentTarget) {
        event.currentTarget.querySelector(".cards").appendChild(draggedItem);
        let id = draggedItem.getAttribute("data-id");
        data = data.map((card) => {
          if (card.id === id) {
            if (event.currentTarget.id === "todo") {
              card.status = "To do";
            } else if (event.currentTarget.id === "inprogress") {
              card.status = "In progress";
            } else if (event.currentTarget.id === "stuck") {
              card.status = "Stuck";
            } else if (event.currentTarget.id === "done") {
              card.status = "Done";
            }
          }
        });
      }
    }
  });
  panel.addEventListener("dragleave", () => {});
  panel.addEventListener("drop", (event) => {
    event.preventDefault();
    updateCardsCount();
  });
});
