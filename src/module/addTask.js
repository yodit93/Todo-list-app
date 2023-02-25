import { getTodos, sortList, savedTodos } from './storage.js';
import CreateTodo from './crete-todo.js';

const addTask = (inputTodo) => {
  const todos = getTodos();
  const newDescription = inputTodo.value;
  const index = todos.length + 1;
  const newTodo = new CreateTodo(newDescription, index);
  todos.push(newTodo);
  sortList(todos);
  savedTodos(todos);
};

export { addTask as default };
