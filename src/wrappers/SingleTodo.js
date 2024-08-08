import styled from "styled-components";

export const Wrapper = styled.form`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 0 20px;
  border-radius: 0.25rem;
  width: 100%;
  height: 3rem;
  gap: 1rem;
  background: var(--todo-bg);
  align-items: center;

  .delete-btn {
    cursor: pointer;
    background: transparent;
    border: none;

    /* font-size: 12px; */
    display: flex;
    align-items: center;
  }
  .delete-btn img {
    width: 12px;
    height: 12px;
  }
  p {
    text-decoration: ${(props) => props.checked && "line-through"};
    color: ${(props) =>
      props.checked ? "var(--completed-todo)" : "var(--text)"};
  }
  .checked {
    background: var(--check-btn-bg);
  }

  @media (width>=768px) {
    height: 4rem;
    p {
      font-size: 14px;
    }
    .delete-btn img {
      width: 18px;
      height: 18px;
    }
  }
`;
