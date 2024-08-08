import styled from "styled-components";

export const Wrapper = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid var(--checkbox);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (width>=768px) {
    width: 24px;
    height: 24px;
  }
`;
