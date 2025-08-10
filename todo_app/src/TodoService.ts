import TodoTypes from "./todo";

const LOCAL_STORAGE_STRING = "TODOS";

const TodosService = {
  //getting Todos
  getTodos: (): TodoTypes[] => {
    const todostr = localStorage.getItem(LOCAL_STORAGE_STRING);
    return todostr ? JSON.parse(todostr) : [];
  },

  //getting Todos
  createTodo: (text: string): TodoTypes => {
    const curr_Todos = TodosService.getTodos();
    const newTodo: TodoTypes = {
      id: curr_Todos.length + 1,
      text,
      completed: false,
    };

    const update_todos = [...curr_Todos, newTodo];
    localStorage.setItem(LOCAL_STORAGE_STRING, JSON.stringify(update_todos));
    return newTodo;
  },

  //update Todos
  updateTodo: (todo: TodoTypes): TodoTypes => {
    const curr_Todos = TodosService.getTodos();
    const updated_todos = curr_Todos.map((curr_Todo) =>
      curr_Todo.id === todo.id ? todo : curr_Todo
    );
    localStorage.setItem(LOCAL_STORAGE_STRING, JSON.stringify(updated_todos));
    return todo;
  },

  //!delete Todos
  deleteTodo: (id: number): void => {
    const curr_Todos = TodosService.getTodos();
    const todos_with_deleted = curr_Todos.filter(
      (curr_Todo) => curr_Todo.id !== id
    );
    localStorage.setItem(
      LOCAL_STORAGE_STRING,
      JSON.stringify(todos_with_deleted)
    );
    return;
  },
};

export default TodosService;
