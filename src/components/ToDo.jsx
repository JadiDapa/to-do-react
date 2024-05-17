import style from "../css/todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

function Todo({ task, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className={style.Todo}>
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
