import { Draggable } from "react-drag-reorder";
import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/Todos";
import SingleTodo from "./SingleTodo";
import { useState } from "react";
const Todos = ({ activeFilter, setActiveFilter }) => {
  const { todos, clearCompleted } = useAppContext();
  const [startId, setStartId] = useState();

  let filteredTodos = todos;
  if (activeFilter === "active") {
    filteredTodos = todos.filter((todo) => todo.checked === false);
  } else if (activeFilter === "completed") {
    filteredTodos = todos.filter((todo) => todo.checked === true);
  }
  return (
    <Wrapper>
      <div className="todos">
        {/* <Draggable
          onPosChange={(currentPos, newPos, e) => {
            console.log(e);

            console.log(currentPos, newPos);
            swapPosition(currentPos, newPos);
          }}
        > */}
        {filteredTodos.map((item, index) => {
          return (
            <SingleTodo
              startId={startId}
              setStartId={setStartId}
              {...item}
              key={item.id}
            >
              {/* {index !== todos.length - 1 && <hr />} */}
              <hr />
            </SingleTodo>
          );
        })}
        {/* </Draggable> */}
        <div className="options">
          <p className="number-of-items">
            {todos.length} item{todos.length > 1 && "s"} left
          </p>
          <div className="filters">
            <button
              onClick={() => {
                setActiveFilter("all");
              }}
              className={`filter-btn ${
                activeFilter === "all" && "active-filter"
              }`}
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
          <button onClick={clearCompleted} className="clear-btn">
            Clear Completed
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Todos;
