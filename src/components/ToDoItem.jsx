import { PenBox, Trash } from "lucide-react";
import style from "../css/todo.module.css";

function TodoItem({ task, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className={style.Todo}>
      <p
        onClick={() => toggleComplete(task.id)}
        className={task.completed ? style.Completed : null}
      >
        {task.task}
      </p>
      <div>
        <PenBox onClick={() => editTodo(task.id)} />
        <span> </span>
        <Trash onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
}

export default TodoItem;
