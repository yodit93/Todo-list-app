import { getTodos, sortList, savedTodos } from './storage.js';

export default function removeTask(idToDelete) {
  let todos = getTodos();
  typeof(todos);
  todos = todos.filter((todo) => !(JSON.stringify(todo.index) === idToDelete))
  sortList(todos);
  savedTodos(todos);
}
