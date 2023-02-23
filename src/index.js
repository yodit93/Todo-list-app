import './style.css';
import morevert from './images/more-vert.svg';
import refresh from './images/autorenew.svg';
import add from './images/add.svg';

const todaysTodo = document.querySelector('.todays-todo');
const addTodo = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');
const completeAll = document.querySelector('.completeAll');

const todos = [{ description: 'Wash clothes', completed: false, index: 1 },
  { description: 'Make dinner', completed: false, index: 2 },
  { description: 'wash dishes', completed: false, index: 3 },
  { description: 'clean house', completed: false, index: 4 }];

todaysTodo.innerHTML = `<h4 class="title">Today's To do</h4>
<button class="refreshBtn"><img src="${refresh}" alt=""></button>`;

addTodo.innerHTML = `<input type="text" class="input-todo" placeholder="Add to your list...">
<button class="addBtn"><img src="${add}" alt=""></button>`;

todos.forEach((todo) => {
  const list = document.createElement('li');
  list.className = 'list';
  list.innerHTML = `
  <input id="${todo.index}" class="check" type="checkbox">
  <span class="todo-title">${todo.description}</span>
  <button id="${todo.index}" class="more-btn"><img src="${morevert}" alt="more-vertical-icon"></button>
  `;
  todoList.appendChild(list);
});

completeAll.innerHTML = `<input class="check" type="checkbox">
<span class="todo-title bold">Complete To Do list project</span>
<button class="more-btn"><img src="${morevert}" alt="more-vertical-icon"></button>`;
