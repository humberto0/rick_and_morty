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

export const Select = styled.select`
  background: transparent;
  border: 0;
  flex: 1;
  font-size: 1rem;
  color: #c3c3c3;
  &::placeholder {
    color: #9e9e9e;
  }

  option {
    background: rgb(32, 35, 41);
    margin-bottom: -2rem !important;
    color: #c3c3c3;
    border: none !important;
    font-size: 1rem;
    border-bottom-left-radius: 4px !important;
    border-bottom-right-radius: 4px !important;
    padding: 10px;
    :hover {
      background-color: #ccc;
      color: #fff;
    }
  }
`;
