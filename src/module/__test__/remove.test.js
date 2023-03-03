/**
 * @jest-environment jsdom
 */

import removeTask from '../remove.js';
import Interact from '../interact.js';

test('check one todo list is removed from the todo-list', () => {
  document.body.innerHTML = '<div><ul class="todo-list"></ul></div>';
  const interact = new Interact([]);
  const todos = ['task1', 'task2'];
  interact.todoList.innerHTML = '';
  todos.forEach((todo) => interact.addTask(todo));
  interact.lists = removeTask('1');
  interact.display();
  const list = document.querySelectorAll('.todo-list li');
  expect(list).toHaveLength(1);
  interact.lists = removeTask('1');
  interact.display();
  expect(document.querySelectorAll('.todo-list li')).toHaveLength(0);
});