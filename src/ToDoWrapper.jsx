import { useState } from "react";
import ToDoForm from "./ToDoForm";
import Todo from "./Todo";
import EditTodo from "./EditTodo";
import { v4 as uuidv4 } from "uuid";

uuidv4();

function ToDoWrapper() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id != id));
  }

  function editTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.completed } : todo
      )
    );
  }

  function editTask(task, id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  }

  return (
    <div className="bg-slate-100 w-full mt-20 p-8 rounded-md ">
      <h1 className="text-slate-600 mb-0.5 text-3xl">Todo List</h1>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodo key={index} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
      <div className="text-slate-950 font-thin text-sm">
        Created By Daffa Althaf R
      </div>
    </div>
  );
}

export default ToDoWrapper;
