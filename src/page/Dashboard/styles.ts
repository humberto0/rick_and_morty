import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  width: 90%;
  margin-top: 1rem;
  gap: 1rem;
`;

export const Image = styled.img`
  width: auto;
`;

export const ContentLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  margin-bottom: 2rem;
`;

export const ContentError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  height: 60vh;
  margin-bottom: 1rem;
`;

export const TextError = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff0000;
  text-align: center;
`;

export const ImageError = styled.img`
  width: 100%;
  max-width: 40rem;
`;
