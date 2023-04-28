/**
 * @jest-environment jsdom
 */

import Interact from '../interact.js';
import { getTodos } from '../storage.js';

const localStorageMock = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Checke add, update, ischecked and clear all completed', () => {
  test('Check wether new task is added to the todo-list', () => {
    document.body.innerHTML = '<div><ul class="todo-list"></ul></div>';
    const interact = new Interact([]);
    const value = 'list added';
    interact.addTask(value);
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(1);
    interact.addTask('microverse');
    expect(document.querySelectorAll('.todo-list li')).toHaveLength(2);
  });

  test('Check wether task description is edited', () => {
    document.body.innerHTML = '<div><ul class="todo-list"></ul></div>';
    const interact = new Interact([]);
    // interact.todoList.innerHTML = '';
    const texts = ['task1', 'task2'];
    texts.forEach((text) => interact.addTask(text));
    interact.updateTask('1', 'updated1');
    interact.display();
    let list = document.querySelectorAll('.todo-title');
    expect(list[0].innerText).toBe('updated1');
    interact.updateTask('1', 'updated2');
    interact.display();
    list = document.querySelectorAll('.todo-title');
    expect(list[0].innerText).toBe('updated2');
  });

  test('Check wether the task completed status is true or not', () => {
    document.body.innerHTML = '<div><ul class="todo-list"></ul></div>';
    // Add two tasks for checking
    const tasks = [{ description: 'task1', index: 1, completed: false },
      { description: 'task2', index: 2, completed: false }];
    const interact = new Interact([]);
    tasks.forEach((task) => interact.addTask(task.description));
    // selecting first checkbox element
    const checkbox = document.querySelectorAll('.check');
    const completeTodo = checkbox[0];
    // assign true value for the first checkbox
    completeTodo.checked = true;
    const idChecked = '1';
    interact.isChecked(completeTodo, idChecked);
    const todos = getTodos();
    expect(todos[0].completed).toBeTruthy();
    expect(todos[1].completed).toBeFalsy();
  });
  test('Check wether completed tasks are removed or not', () => {
    document.body.innerHTML = '<div><ul class="todo-list"></ul></div>';
    // Add two tasks for checking
    const tasks = [{ description: 'task1', index: 1, completed: false },
      { description: 'task2', index: 2, completed: false }];
    const interact = new Interact([]);
    tasks.forEach((task) => interact.addTask(task.description));
    // selecting first checkbox element
    const checkbox = document.querySelectorAll('.check');
    const completeTodo = checkbox[0];
    // assign true value for the first checkbox
    completeTodo.checked = true;
    const idChecked = '1';
    interact.isChecked(completeTodo, idChecked);
    interact.clearAllCompleted();
    const lists = document.querySelectorAll('.list');
    expect(lists).toHaveLength(1);
  });
});
