import morevert from '../images/more-vert.svg';
import updateTask from './update.js';
import removeTask from './remove.js';

const todoList = document.querySelector('.todo-list');

export default class Interact {
  constructor(lists) {
    this.lists = lists;
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

  updateTodo = (e) => {
    const idUpdate = e.target.id;
    const newValue = document.querySelector('.new-input').value;
    updateTask(idUpdate, newValue);
    this.display();
    window.location.reload();
  };

  deleteTask = (e) => {
    const removed = e.target;
    const { id } = removed;
    removeTask(id);
    this.display();
    window.location.reload();
  };

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
    todoList.innerHTML = '';
    this.lists.forEach((todo) => {
      const list = document.createElement('li');
      list.className = 'list';
      let elem = document.createElement('input');
      elem.type = 'checkbox';
      elem.id = `${todo.index}`;
      elem.className = 'check';
      list.appendChild(elem);
      elem = document.createElement('span');
      elem.className = 'todo-title';
      elem.innerText = `${todo.description}`;
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
