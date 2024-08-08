import { Wrapper } from "../wrappers/TodoSection";
import AddTodo from "./AddTodo";
import moonImg from "/images/icon-moon.svg";
import sunImg from "/images/icon-sun.svg";
import Todos from "./Todos";
import { useState } from "react";
import { useAppContext } from "../App";
const TodoSection = () => {
  const { theme, setTheme } = useAppContext();
  const [activeFilter, setActiveFilter] = useState("all");
  return (
    <Wrapper>
      <div className="todo-header">
        <h1>TODO</h1>
        <div className="theme-btn-container">
          {theme === "light" ? (
            <button onClick={() => setTheme("dark")} className="toggle-btn">
              <img src={moonImg} alt="" />
            </button>
          ) : (
            <button onClick={() => setTheme("light")} className="toggle-btn">
              <img src={sunImg} alt="" />
            </button>
          )}
        </div>
      </div>
      <AddTodo />
      <Todos activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <div className="filters-small">
        <button
          onClick={() => {
            setActiveFilter("all");
          }}
          className={`filter-btn ${activeFilter === "all" && "active-filter"}`}
        >
          All
        </button>
        <button
          onClick={() => {
            setActiveFilter("active");
          }}
          className={`filter-btn ${
            activeFilter === "active" && "active-filter"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => {
            setActiveFilter("completed");
          }}
          className={`filter-btn ${
            activeFilter === "completed" && "active-filter"
          }`}
        >
          Completed
        </button>
      </div>
      <p className="drag">Drag and drop to reorder list</p>
    </Wrapper>
  );
};
export default TodoSection;
