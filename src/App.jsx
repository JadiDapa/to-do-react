import style from "../css/ToDoList.module.css";
import ToDoWrapper from "./ToDoWrapper";

export default function App() {
  return (
    <div className={style.TodoList}>
      <ToDoWrapper />
    </div>
  );
}
