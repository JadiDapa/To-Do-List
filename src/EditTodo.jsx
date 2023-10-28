import { useState } from "react";

function EditTodo({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  function handleSubmit(e) {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-slate-900 border-2 py-2 px-4 mt-4 mb-8 w-[300px] text-slate-400 rounded-md placeholder:text-slate-500"
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        type="submit"
        className="bg-secondary text-slate-500 p-2 cursor-pointer"
      >
        Update Task
      </button>
    </form>
  );
}

export default EditTodo;
