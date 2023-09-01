import './styles.css'
import listCard from './list'

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