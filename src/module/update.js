import { savedTodos, getTodos } from './storage.js';

export default function updateTask(idUpdate, newValue) {
  const todos = getTodos();
  const m = todos.find((todo) => Number(todo.index) === Number(idUpdate));
  m.description = newValue;
  savedTodos(todos);
}
