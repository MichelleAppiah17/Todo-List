import './styles.css'
//import listCard from './list'

const addButton = document.querySelector('.addListBtn');
const taskList = document.querySelector('.taskList');
const savedContent = {};

addButton.addEventListener('click', function (event) {
  event.preventDefault();

  const input = document.querySelector('.newList').value;
  const listNameItem = document.createElement('li');
  listNameItem.classList.add('listName');
  listNameItem.textContent = input;

  taskList.appendChild(listNameItem);
  document.querySelector('.newList').value = '';
});

document.querySelectorAll('.listName').forEach((item) => {
  item.addEventListener('click', function listCard() {
    const cardTitle = item.textContent;

    var taskCard = document.createElement('div');
    taskCard.classList.add('taskCard');

    var closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.classList.add('closeButton');

    const cardHeading = document.createElement('h2');
    cardHeading.textContent = cardTitle;

    const cardLists = document.createElement('ul');
    cardLists.classList.add('cardLists');

    const cardInput = document.createElement('input');
    cardInput.type = 'text';
    cardInput.classList.add('cardInput');

    const cardAddBtn = document.createElement('button');
    cardAddBtn.textContent = 'Add';
    cardAddBtn.classList.add('cardAddBtn');

    let contentSaved = false;

    cardAddBtn.addEventListener('click', function () {
      var cardListInput = cardInput.value;

      if (cardListInput !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = cardListInput;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButtton')
        deleteButton.textContent = 'X';


        deleteButton.addEventListener('click', function () {
          listItem.remove();
        });

        listItem.appendChild(deleteButton);
        cardLists.appendChild(listItem);
        cardInput.value = '';
      }
    });

    closeButton.addEventListener('click', function () {
      if (!contentSaved) {
        savedContent[cardTitle] = savedContent[cardTitle] || [];
        cardLists.querySelectorAll('li').forEach((listItem) => {
          savedContent[cardTitle].push(listItem.textContent);
        });
        contentSaved = true;
      }
      taskCard.remove();
    });

    if (savedContent[cardTitle]) {
      savedContent[cardTitle].forEach((content) => {
        const listItem = document.createElement('li');
        listItem.textContent = content;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButtton')
        deleteButton.textContent = 'X';

        deleteButton.addEventListener('click', function () {
          listItem.remove();
        });

        listItem.appendChild(deleteButton);
        cardLists.appendChild(listItem);
      });

      contentSaved = true;
    }

    taskCard.appendChild(closeButton);
    taskCard.appendChild(cardHeading);
    taskCard.appendChild(cardLists);
    taskCard.appendChild(cardInput);
    taskCard.appendChild(cardAddBtn);

    document.body.appendChild(taskCard);
  });
});
