import styled from "styled-components";

export const Container = styled.div`
  background: rgb(32, 35, 41);
  color: #c3c3c3;
  padding: 0.5rem;
  border-radius: 0.3125rem;
  min-height: 3.3rem;
  max-height: 3.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 19.68rem;
  align-items: center;
`;

export const Input = styled.input`
  background: transparent;
  border: 0;
  flex: 1;
  color: #c3c3c3;
  &::placeholder {
    color: #9e9e9e;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 0;
  color: #c3c3c3;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #9e9e9e;
  }
`;
