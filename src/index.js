import './style.css';
import morevert from './images/more-vert.svg';
import refresh from './images/autorenew.svg';
import add from './images/add.svg';

const todaysTodo = document.querySelector('.todays-todo');
const addTodo = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');
const completeAll = document.querySelector('.completeAll');


let todos = [{ description: 'Wash clothes', completed: false, id: '1' },
  { description: 'Make dinner', completed: false, id: '2' },
  { description: 'wash dishes', completed: false, id: '3' },
  { description: 'clean house', completed: false, id: '4' }];

render();

class CreateTodo {
  constructor(description, id) {
    this.description = description;
    this.id = id;
    this.completed = false;
  }
}

function render() {
  todoList.innerHTML = '';
  todaysTodo.innerHTML = `<h4 class="title">Today's To do</h4>
  <button class="refreshBtn"><img src="${refresh}" alt=""></button>`;
  addTodo.innerHTML = `<input type="text" class="input-todo" placeholder="Add to your list...">
  <button class="addBtn"><img src="${add}" alt=""></button>`;
  todos.forEach((todo) => {
    const list = document.createElement('li');
    list.className = 'list';
    list.innerHTML = `
    <input id="${todo.id}" class="check" type="checkbox">
    <span class="todo-title">${todo.description}</span>
    <button class="more-btn"><img id="${todo.id}" src="${morevert}" alt="more-vertical-icon"></button>
    `;
    todoList.appendChild(list);
  });
  completeAll.innerHTML = `<input class="check" type="checkbox">
  <span class="todo-title bold">Complete To Do list project</span>
  <button class="more-btn"><img src="${morevert}" alt="more-vertical-icon"></button>`;

  const moreBtn = document.querySelectorAll('.more-btn > img');
  moreBtn.forEach(function(more) {
    more.addEventListener('click', function(e) {
      moreVert();
     
      // const removed = e.target;
      // const id = removed.id;
      // removeTask(id);
      // render();
    })
  });
}

const lists = document.querySelectorAll('.list');

function moreVert() {
  console.log('hello');
  const elem = document.createElement('div');
  elem.className = 'click';
  elem.innerHTML = 
    `<div class="click-more">
      <button class="delete fa-sharp fa-solid fa-trash"></button>
      <button class="edit fa-regular fa-pen-to-square"></button>
    </div>`
  lists.appendChild(elem);
}

moreVert();

  function addTask() {
    const newDescription = inputTodo.value;
    const id = `${new Date().getTime()}`;
  const newTodo = new CreateTodo(newDescription, id);
  todos.push(newTodo);
}

function removeTask(idToDelete) {
  todos = todos.filter(function(todo) {
    if(todo.id === idToDelete) {
      return false;
    }
    else {
      return true;
    }
  })
}


const inputTodo = document.querySelector('.input-todo');
const addBtn = document.querySelector('.addBtn');


addBtn.addEventListener('click', function(e){
  addTask();
  render();
});



