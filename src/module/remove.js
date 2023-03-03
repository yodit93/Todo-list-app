import { getTodos, sortList, savedTodos } from './storage.js';

export default function removeTask(idToDelete) {
  let todos = getTodos();
  todos = todos.filter((todo) => !(JSON.stringify(todo.index) === idToDelete));
  todos = sortList(todos);
  savedTodos(todos);
  return todos;
}
