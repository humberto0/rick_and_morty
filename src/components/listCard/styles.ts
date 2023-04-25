import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  padding: 4.5rem 5rem;
  overflow: auto;

  min-height: calc(50vh - 60px);
  height: auto;
  width: 100%;
  max-width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 56.25rem) {
    grid-template-columns: 1fr;
  }
`;
