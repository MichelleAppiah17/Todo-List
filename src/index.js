import './styles.css'
//import listCard from './list'

const addButton = document.querySelector('.addListBtn');
const taskList = document.querySelector('.taskList');

addButton.addEventListener('click', function(event) {
  event.preventDefault();

  const input = document.querySelector('.newList').value;

  const listItem = document.createElement('li');
  listItem.classList.add('listName');
  listItem.textContent = input;

  taskList.appendChild(listItem);

  document.querySelector('.newList').value = '';
});

var listName = document.querySelectorAll(".listName");

listName.forEach((item) => {
  item.addEventListener("click", function listCard() {

    
    var taskCard = document.createElement("div");
    taskCard.classList.add("taskCard");

    var closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.classList.add("closeButton");
    closeButton.addEventListener("click", function() {
       taskCard.remove();
    });

    const cardHeading = document.createElement('h2');
    cardHeading.textContent = item.textContent;

    const cardLists = document.createElement('ul');
    cardLists.classList.add('cardLists');

    const cardInput = document.createElement('input');
    cardInput.type = 'text';
    cardInput.classList.add('cardInput');

    const cardAddBtn = document.createElement('button')
    cardAddBtn.textContent = 'Add';
    cardAddBtn.classList.add('cardAddBtn');

    cardAddBtn.addEventListener('click', function() {
      var cardListInput = cardInput.value;

      const listItem = document.createElement('li');
      listItem.textContent = cardListInput;

      cardLists.appendChild(listItem);

      cardInput.value = '';
    });

    taskCard.appendChild(closeButton);
    taskCard.appendChild(cardHeading);
    taskCard.appendChild(cardLists);
    taskCard.appendChild(cardInput);
    taskCard.appendChild(cardAddBtn);

    document.body.appendChild(taskCard);
  });
});