import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1rem;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Stack = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Text = styled.p`
  font-size: 0.875rem;
  color: #ffff;
  width: auto;
  text-align: center;
`;

export const Button = styled.button`
  background: rgb(60, 62, 68);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  color: #ffff;

  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 0;

  cursor: pointer;

  transition: 0.3s ease-in-out;
  &:hover {
    color: #9e9e9e;
  }

  &:disabled {
    cursor: not-allowed;
    color: #04d361;
  }

  &.page {
    @media (max-width: 35.625rem) {
      display: none;
    }
  }
`;
