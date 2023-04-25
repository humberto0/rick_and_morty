import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-top: 1rem;
  gap: 1rem;
  padding: 2rem;

  @media (max-width: 48rem) {
    flex-direction: column;
    justify-content: center;
  }
`;
