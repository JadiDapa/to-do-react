import style from "../css/todo.module.css";
import { useState } from "react";

function ToDoEdit({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  function handleSubmit(e) {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  }

  return (
    <form className={style.TodoForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={style.TodoInput}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className={style.TodoBtn}>
        Update Task
      </button>
    </form>
  );
}

export default ToDoEdit;
