import styled from "styled-components";

export const Wrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 90%;
  margin: 3rem auto;

  .todo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--white);
    margin-bottom: 40px;
  }
  h1 {
    letter-spacing: 15px;
  }
  .toggle-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
  }
  .toggle-btn img {
    width: 20px;
    height: 20px;
  }
  .checkbox:hover {
    border-color: #55ddff;
  }
  .filters-small {
    background: var(--todo-bg);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    padding: 0 20px;
    border-radius: 0.25rem;
    width: 100%;
    height: 3rem;
    color: var(--filters);
    margin-bottom: 40px;
  }
  .filter-btn {
    font-size: 14px;
    background: transparent;
    border: none;
    color: var(--filters);
    font-weight: 700;
    cursor: pointer;
  }
  .filter-btn:hover:not(.active-filter) {
    color: var(--text);
  }
  .active-filter {
    color: var(--blue);
  }
  .drag {
    color: var(--filters);
    font-size: 14px;
    text-align: center;
  }
  @media (width>=768px) {
    max-width: 540px;
    .filters-small {
      display: none;
    }
    .toggle-btn img {
      width: 26px;
      height: 26px;
    }
  }
`;
