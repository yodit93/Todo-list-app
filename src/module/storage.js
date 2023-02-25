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

const sortList = (todos) => {
  sortTodo(todos);
  for (let i = 0; i < todos.length; i += 1) {
    todos[i].index = i + 1;
  }
};
export { savedTodos, getTodos, sortList };