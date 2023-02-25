/* eslint-disable import/no-cycle */
import './style.css';
import morevert from './images/more-vert.svg';
import refresh from './images/autorenew.svg';
import add from './images/add.svg';
import display from './module/display.js';
import updateTask from './module/update.js';
import addTask from './module/addTask.js';
import removeTask from './module/remove.js';

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

display();

const lists = document.querySelectorAll('.list');
const inputTodo = document.querySelector('.input-todo');
const addBtn = document.querySelector('.addBtn');

function updateTodo(e) {
  const idUpdate = e.target.id;
  const newValue = document.querySelector('.new-input').value;
  updateTask(idUpdate, newValue);
  display();
}

function editTodo(idTask) {
  lists.forEach((list) => {
    if (list.childNodes[2].firstChild.id === idTask) {
      const elem = document.createElement('div');
      elem.className = 'edit-cont';
      let el = document.createElement('input');
      el.type = 'text';
      el.className = 'new-input';
      elem.appendChild(el);
      el = document.createElement('button');
      el.className = 'update';
      el.id = idTask;
      el.innerText = 'Update';
      el.onclick = updateTodo;
      elem.appendChild(el);
      list.replaceChild(elem, list.childNodes[1]);
      list.removeChild(list.childNodes[2]);
    }
  });
}

function editTask(e) {
  const idTask = e.target.id;
  editTodo(idTask);
}

function deleteTask(e) {
  const removed = e.target;
  const { id } = removed;
  removeTask(id);
  display();
  window.location.reload();
}

function moreButton(idClicked) {
  lists.forEach((list) => {
    if (list.childNodes[2].firstChild.id === idClicked) {
      const elem = document.createElement('div');
      elem.className = 'click-more';
      let el = document.createElement('button');
      el.classList = 'delete fa-sharp fa-solid fa-trash';
      el.id = idClicked;
      el.onclick = deleteTask;
      elem.appendChild(el);
      el = document.createElement('button');
      el.classList = 'edit fa-regular fa-pen-to-square';
      el.id = idClicked;
      el.onclick = editTask;
      elem.appendChild(el);
      list.replaceChild(elem, list.childNodes[2]);
    }
  });
}

export default function clickedBtn(e) {
  const idClicked = e.target.id;
  moreButton(idClicked);
}

addBtn.addEventListener('click', () => {
  if (inputTodo.value !== '') {
    addTask(inputTodo);
    display();
    window.location.reload();
  }
});
