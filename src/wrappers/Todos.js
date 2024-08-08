import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 0.25rem;
  font-size: 12px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
  .todos {
    background: var(--todo-bg);
    /* display: grid; */
    border-radius: 0.25rem;
  }
  hr {
    border: none;
    height: 1px;
    background: var(--checkbox);
  }
  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-radius: 0.25rem;
    width: 100%;
    height: 3rem;
    color: var(--filters);
  }
  .number-of-items {
  }
  button {
    background: transparent;
    border: none;
    color: var(--filters);
    cursor: pointer;
  }
  .clear-btn {
    font-size: 12px;
  }
  .clear-btn:hover {
    color: var(--text);
  }
  .filters {
    display: none;
  }
  .filters button {
    font-size: 14px;
    font-weight: 700;
  }
  .filters button:hover:not(.active-filter) {
    color: var(--text);
  }
  @media (width>=768px) {
    font-size: 18px;
    margin-bottom: 40px;
    .clear-btn {
      font-size: 14px;
    }
    .filters {
      display: flex;
      gap: 1rem;
    }
  }
`;
