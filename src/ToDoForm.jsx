import { useState } from "react";

function ToDoForm({ addTodo }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-slate-900 border-2 py-2 px-4 mt-4 mb-8 w-[300px] text-slate-400 rounded-md placeholder:text-slate-500"
        placeholder="What is your tasks today?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        type="submit"
        className="bg-secondary text-slate-500 p-2 cursor-pointer"
      >
        Add Task
      </button>
    </form>
  );
}

export default ToDoForm;
