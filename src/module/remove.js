import { getTodos, sortTodo, savedTodos } from './storage.js';

export default function removeTask(idToDelete) {
  let todos = getTodos();
  todos = todos.filter((todo) => {
    if (JSON.stringify(todo.index) === idToDelete) {
      return false;
    }

    return true;
  });
  sortTodo(todos);
  savedTodos(todos);
}
