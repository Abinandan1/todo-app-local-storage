import { Wrapper } from "../wrappers/SingleTodo";
import Checkbox from "./Checkbox";
import crossImg from "../../public/images/icon-cross.svg";
import { useState } from "react";
import { useAppContext } from "../App";

const SingleTodo = ({
  id,
  todo,
  checked: newChecked,
  children,
  startId,
  setStartId,
}) => {
  const [checked, setChecked] = useState(newChecked);
  const { deleteTodo, swapPosition } = useAppContext();
  const handleDrop = (e) => {
    console.log(startId);
    swapPosition(startId, id);
  };
  return (
    <>
      <Wrapper
        checked={checked}
        draggable={true}
        onDragOver={(e) => e.preventDefault()}
        onDragStart={(e) => {
          setStartId(id);
        }}
        onDrop={handleDrop}
      >
        <Checkbox
          id={id}
          checked={checked}
          setChecked={setChecked}
          edit={true}
        />
        <p>{todo}</p>
        <button onClick={() => deleteTodo(id)} className="delete-btn">
          <img src={crossImg} alt="" />
        </button>
      </Wrapper>
      {children}
    </>
  );
};
export default SingleTodo;
