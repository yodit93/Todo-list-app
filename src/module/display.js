/* eslint-disable import/no-cycle */
import { getTodos } from './storage.js';
import clickedBtn from '../index.js';
import morevert from '../images/more-vert.svg';

const todoList = document.querySelector('.todo-list');

export default function display() {
  todoList.innerHTML = '';
  const todos = getTodos();
  todos.forEach((todo) => {
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
    el.onclick = clickedBtn;
    elem.appendChild(el);
    list.appendChild(elem);
    todoList.appendChild(list);
  });
}

display();
