import styled, { keyframes } from 'styled-components';

export const Container = styled.article`
  width: 100%;
  height: 100%;
  max-width: 37.5rem;
  max-height: 12.5rem;

  display: flex;

  background: rgb(60, 62, 68);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  border-radius: 0.5rem;

  @media (max-width: 35.625rem) {
    flex-direction: column;

    max-width: 12.5rem;
    max-height: 37.5rem;
  }
`;

export const ImageContent = styled.div`
  flex: 2 1 0;
  width: 100%;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;

  margin: 0px;

  opacity: 1;

  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
  border-radius: 0.5rem 0 0 0.5rem;

  @media (max-width: 35.625rem) {
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

export const Content = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex: 3 1 0;

  padding: 0.75rem;

  color: rgb(255, 255, 255);

  @media (max-width: 35.625rem) {
    align-items: center;
  }
`;

export const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;

  color: #04d361;

  @media (max-width: 35.625rem) {
    text-align: center;
  }
`;

const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const Pointer = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;

  background-color: #04d361;

  animation: ${blinkAnimation} 1s infinite;

  &.dead {
    background-color: red;
    animation: none;
  }

  &.unknown {
    background-color: #9e9e9e;
    animation: none;
  }
`;

export const Description = styled.div`
  font-size: 1rem;
  font-weight: 300;

  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 35.625rem) {
    justify-content: center;
    text-align: center;
  }
`;

export const Status = styled.span`
  font-size: 1rem;
  font-weight: 400;

  color: #9e9e9e;

  @media (max-width: 35.625rem) {
    text-align: center;
  }
`;

export const SubDescription = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 35.625rem) {
    align-items: center;
  }
`;
