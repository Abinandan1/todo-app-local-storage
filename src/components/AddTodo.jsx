import { useState } from "react";
import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/AddTodo";
import Checkbox from "./Checkbox";
import { nanoid } from "nanoid";
const AddTodo = () => {
  const { todos, setTodos, addTodo } = useAppContext();
  const [checked, setChecked] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { todo } = Object.fromEntries(formData);
    addTodo({ id: nanoid(), todo, checked });
    e.currentTarget.reset();
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <div className="form-row">
        <Checkbox checked={checked} setChecked={setChecked} />
        <input
          type="text"
          name="todo"
          placeholder="Create a new todo..."
          className="form-input"
        />
      </div>
    </Wrapper>
  );
};
export default AddTodo;
