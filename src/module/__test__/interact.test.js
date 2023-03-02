/**
 * @jest-environment jsdom
 */

import Interact from "../interact";

const interact = new Interact();

test('Check wether new task is added to the todo-list', () => {
  document.body.innerHTML = 
  '<div>' +
  ' <ul class="todo-list"><li></li></ul>' +
  '</div>';
  const value = 'list added';
  const index = 1;
  const newTodo = new CreateTodo(value, index);
  interact.addTask(value);
  const list = document.querySelector('.todo-list li');
  expect(list).toHaveLength(1);
})