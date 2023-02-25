const savedTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const getTodos = () => {
  let todos;
  if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
  } else {
    todos = [];
  }
  return todos;
};

const sortTodo = (todos) => {
  todos.sort((a, b) => a.index - b.index);
};

export { savedTodos, getTodos, sortTodo };