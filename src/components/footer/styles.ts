import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-flow: column nowrap;
  position: relative;

  background: rgb(32, 35, 41);
  color: #9e9e9e;

  padding: 4.5rem 0;
  min-height: calc(120px);
  width: 100%;
  gap: 1rem;
`;

export const Status = styled.ul`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;

  align-items: center;
  flex-wrap: wrap;

  margin: 0;
  padding: 0;
  width: 100%;
  gap: 1rem;
  li {
    margin: 1rem;
  }
`;

export const DataStatus = styled.span`
  border-bottom: none;
  text-transform: uppercase;
`;

export const SocialIcons = styled.div`
  display: inline-block;
  margin-left: 0.875rem;
  img: {
    transition: 0.3s ease-in-out;
  }
  margin-top: 1rem;
  gap: 1rem;
`;

export const SocialLogo = styled.img`
  width: 40%;
  z-index: 1;
`;

export const SocialIconLink = styled.a`
  width: 2.625rem;
  height: 2.625rem;

  background: rgba(217, 217, 217, 0.1);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  margin-right: 0.375rem;

  line-height: 1;

  border: 0.0625rem solid rgba(255, 255, 255, 0.5);

  :hover img {
    filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%)
      hue-rotate(346deg) brightness(95%) contrast(86%);
  }

  :hover {
    ::before {
      transform: scale(1);
    }
  }

  ::before {
    content: "";
    width: 2.625rem;
    height: 2.625rem;

    position: absolute;

    background-color: #ffffff;
    border-radius: 50%;

    transform: scale(0);
    transition: 0.3s ease-in-out;
  }
`;

export const CopyRight = styled.h1`
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;

  color: #9e9e9e;

  margin-top: 1rem;
`;

export const CopyRightLink = styled.a`
  color: #f1f1f1;
  text-decoration: none;
  margin: 0 0.5rem;
  transition: 0.3s ease-in-out;
`;
