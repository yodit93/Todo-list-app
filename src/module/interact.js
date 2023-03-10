import morevert from '../images/more-vert.svg';
import removeTask from './remove.js';
import { sortList, savedTodos } from './storage.js';
import CreateTodo from './crete-todo.js';

export default class Interact {
  constructor(lists = []) {
    this.lists = lists;
    this.todoList = document.querySelector('.todo-list');
  }

  editTodo = (idTask, parent) => {
    parent.removeChild(parent.childNodes[1]);
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
    el.onclick = this.updateTodo;
    elem.appendChild(el);
    parent.replaceChild(elem, parent.childNodes[1]);
  }

  addTask = (value) => {
    const index = this.lists.length + 1;
    const newTodo = new CreateTodo(value, index);
    this.lists.push(newTodo);
    sortList(this.lists);
    savedTodos(this.lists);
    this.display();
  };

  editTask = (e) => {
    const idTask = e.target.id;
    const parent = e.target.parentNode.parentNode;
    this.editTodo(idTask, parent);
  }

  clickedBtn = (e) => {
    const parent = e.target.parentNode.parentNode;
    const idClicked = e.target.id;
    this.moreButton(parent, idClicked);
  }

  updateTask = (idUpdate, newValue) => {
    const list = this.lists.find((todo) => Number(todo.index) === Number(idUpdate));
    list.description = newValue;
    savedTodos(this.lists);
    this.display();
    return this.lists;
  }

  updateTodo = (e) => {
    const idUpdate = e.target.id;
    const input = document.querySelector('.new-input');
    const newValue = input.value;
    this.updateTask(idUpdate, newValue);
  };

  deleteTask = (e) => {
    const removed = e.target;
    const { id } = removed;
    this.lists = removeTask(id);
    this.display();
  };

  isChecked = (completeTodo, idChecked) => {
    this.lists = this.lists.map((todo) => {
      if (JSON.stringify(todo.index) === idChecked) {
        todo.completed = completeTodo.checked;
        completeTodo.parentNode.childNodes[1].style.textDecoration = 'line-through';
      }
      return todo;
    });
    savedTodos(this.lists);
  }

  isCompleted = (e) => {
    const completeTodo = e.target;
    const idChecked = completeTodo.dataset.id;
    this.isChecked(completeTodo, idChecked);
  }

  clearAllCompleted = () => {
    this.lists = this.lists.filter((todo) => !todo.completed);
    sortList(this.lists);
    savedTodos(this.lists);
    this.display();
  }

  moreButton = (parent, idClicked) => {
    parent.removeChild(parent.childNodes[2]);
    const elem = document.createElement('div');
    elem.className = 'click-more';
    let el = document.createElement('button');
    el.classList = 'delete fa-sharp fa-solid fa-trash';
    el.id = idClicked;
    el.onclick = this.deleteTask;
    elem.appendChild(el);
    el = document.createElement('button');
    el.classList = 'edit fa-regular fa-pen-to-square';
    el.id = idClicked;
    el.onclick = this.editTask;
    elem.appendChild(el);
    parent.appendChild(elem);
  }

  display = () => {
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';
    this.lists.forEach((todo) => {
      const list = document.createElement('li');
      list.className = 'list';
      let elem = document.createElement('input');
      elem.type = 'checkbox';
      elem.dataset.id = `${todo.index}`;
      elem.onchange = this.isCompleted;
      elem.className = 'check';
      if (todo.completed) {
        elem.checked = true;
      }
      list.appendChild(elem);
      elem = document.createElement('span');
      elem.className = 'todo-title';
      elem.innerText = `${todo.description}`;
      if (todo.completed) {
        elem.style.textDecoration = 'line-through';
      }
      list.appendChild(elem);
      elem = document.createElement('button');
      elem.className = 'more-btn';
      const el = document.createElement('img');
      el.id = `${todo.index}`;
      el.src = `${morevert}`;
      el.alt = 'more-vertical-icon';
      el.onclick = this.clickedBtn;
      elem.appendChild(el);
      list.appendChild(elem);
      todoList.appendChild(list);
    });
  }
}
