import styled from "styled-components";

export const Wrapper = styled.form`
  background: var(--todo-bg);
  border-radius: 0.25rem;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
  .form-row {
    display: grid;
    grid-template-columns: auto 1fr;
    width: 100%;
    height: 3rem;
    align-items: center;
    padding: 0 20px;
    gap: 1rem;
  }
  .form-input {
    background: transparent;
    border: none;
    font-size: 12px;
    caret-color: var(--blue);
    color: var(--text);
  }
  .form-input:focus {
    outline: none;
  }
  /* .checkbox {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid var(--checkbox);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  */
  .checked {
    background: var(--check-btn-bg);
  }
  @media (width>=768px) {
    /* .checkbox {
      width: 24px;
      height: 24px;
    } */
    .form-row {
      height: 4rem;
    }
    .form-input {
      font-size: 18px;
    }
  }
`;
