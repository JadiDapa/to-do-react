import style from "../css/todo.module.css";
import { useState } from "react";

function ToDoForm({ addTodo }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }

  return (
    <form className={style.Todoform} onSubmit={handleSubmit}>
      <input
        type="text"
        className={style.TodoInput}
        placeholder="What is your tasks today?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className={style.TodoBtn}>
        Add Task
      </button>
    </form>
  );
}

export default ToDoForm;
