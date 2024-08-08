import { useState } from "react";
import { Wrapper } from "../wrappers/Checkbox";
import checkImg from "/images/icon-check.svg";
import { useAppContext } from "../App";

const Checkbox = ({ id, checked, setChecked, edit }) => {
  const { editTodo } = useAppContext();
  return (
    <Wrapper
      onClick={() => {
        if (edit) {
          editTodo(!checked, id);
        }
        setChecked(!checked);
      }}
      className={`checkbox ${checked && "checked"}`}
    >
      {checked ? <img src={checkImg} alt="" /> : ""}
    </Wrapper>
  );
};
export default Checkbox;
