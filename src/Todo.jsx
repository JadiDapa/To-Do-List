import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

function Todo({ task, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="flex justify-between items-center border border-slate-800 text-slate-800 py-3 px-4 rounded-md mb-4 cursor-pointer">
      <p
        onClick={() => toggleComplete(task.id)}
        className={task.completed ? style.Completed : null}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <span> </span>
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
}

export default Todo;
