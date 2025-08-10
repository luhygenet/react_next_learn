import React, { useState, Dispatch, SetStateAction } from "react";
import TodosService from "../TodoService";
import TodoTypes from "../todo";
import "../CSS/TodoForm.css";

interface settingType {
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoForm: React.FC<settingType> = ({ setTodos }) => {
  const [newTodoText, setNewTodoText] = useState<string>("");

  const handleAddNewTodo = () => {
    if (newTodoText.trim()) {
      const newTodo = TodosService.createTodo(newTodoText.trim());
      setTodos((previousTodo) => [...previousTodo, newTodo]);
      setNewTodoText("");
    }
  };
  return (
    <div className="inputForm">
      <input
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        autoFocus={true}
        placeholder="Add a task"
      />
      <button onClick={handleAddNewTodo}>Add a task todo</button>
    </div>
  );
};

export default TodoForm;
