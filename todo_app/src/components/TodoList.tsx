import { useState } from "react";
import TodoTypes from "../todo";
import TodoService from "../TodoService";
import TodosService from "../TodoService";
import { FaCheck, FaEdit } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import TodoForm from "./TodoForm";
import "../CSS/TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState<TodoTypes[]>(TodosService.getTodos);
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editingTodoText, setEditingTodoText] = useState<string>("");

  //handling edits

  //handle when the edit button is pressed

  const handleEditStart = (id: number, text: string) => {
    setEditingTodoId(id);
    setEditingTodoText(text);
  };

  //handle when the editing is cancelled
  const handleEditCancel = () => {
    setEditingTodoId(null);
    setEditingTodoText("");
  };

  //handle when the editing is saved
  const handleEditSave = (id: number) => {
    if (editingTodoText.trim() !== "") {
      const updatedTodo = TodoService.updateTodo({
        id: id,
        text: editingTodoText,
        completed: false,
      });
      setTodos((previousTodos) =>
        previousTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
      setEditingTodoId(null);
      setEditingTodoText("");
    }
  };

  const handleDelete = (id: number) => {
    TodoService.deleteTodo(id);
    setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todoContainer">
      <div>
        <TodoForm setTodos={setTodos} />
      </div>
      <div className="todos">
        {todos.map((todo) => (
          <div className="items" key={todo.id}>
            {editingTodoId === todo.id ? (
              <div className="editText">
                <input
                  type="text"
                  value={editingTodoText}
                  onChange={(e) => {
                    setEditingTodoText(e.target.value);
                  }}
                  autoFocus={true}
                />
                <button
                  onClick={() => {
                    handleEditSave(todo.id);
                  }}
                >
                  <FaCheck />
                </button>
                <button
                  className="cancelBtn"
                  onClick={() => {
                    handleEditCancel();
                  }}
                >
                  <GiCancel />
                </button>
              </div>
            ) : (
              <div className="editBtn">
                <span>{todo.text}</span>
                <button
                  onClick={() => {
                    handleEditStart(todo.id, todo.text);
                  }}
                >
                  <FaEdit />
                </button>
              </div>
            )}
            <div className="deleteBtn">
              <button onClick={() => handleDelete(todo.id)}>
                <RiDeleteBin5Fill />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
