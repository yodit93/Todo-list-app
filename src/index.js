import './style.css';
import morevert from './images/more-vert.svg';
import refresh from './images/autorenew.svg';
import add from './images/add.svg';
import Interact from './module/display.js';
import { getTodos } from './module/storage.js';
import addTask from './module/addTask.js';

const todos = getTodos();
const interact = new Interact(todos);
const todaysTodo = document.querySelector('.todays-todo');
const addTodo = document.querySelector('.add-todo');
const completeAll = document.querySelector('.completeAll');

function render() {
  todaysTodo.innerHTML = `<h4 class="title">Today's To do</h4>
  <button class="refreshBtn"><img src="${refresh}" alt=""></button>`;
  addTodo.innerHTML = `<input type="text" class="input-todo required" placeholder="Add to your list...">
  <button class="addBtn"><img src="${add}" alt=""></button>`;

  completeAll.innerHTML = `<input class="check" type="checkbox">
  <span class="todo-title bold">Complete To Do list project</span>
  <button class="more-btn"><img src="${morevert}" alt="more-vertical-icon"></button>`;
}

render();

interact.display();

const inputTodo = document.querySelector('.input-todo');
const addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click', () => {
  if (inputTodo.value !== '') {
    addTask(inputTodo);
    interact.display();
    window.location.reload();
  }
});
