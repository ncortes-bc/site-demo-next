import styled from "styled-components";
import {
  sidebarWidth,
  contentfulWidth,
  mediumWidth,
  mobileWidth,
  orange,
} from "../../Global";

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 690px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${mediumWidth}) {
    flex-direction: column;
    height: auto;
  }
`;

export const ColorBlock = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  height: 173px;
  background-color: ${orange};
  z-index: 2;

  @media (max-width: ${mediumWidth}) {
    height: 150px;
    left: auto;
    top: 0;
  }

  @media (max-width: ${mediumWidth}) {
    width: 200px;
    height: 150px;
    left: auto;
    top: 0;
  }
`;

export const Content = styled.div`
  width: ${contentfulWidth};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 3;

  @media (max-width: ${contentfulWidth}) {
    width: ${mediumWidth};
  }

  @media (max-width: ${mediumWidth}) {
    width: 100%;
    flex-direction: column;
  }
`;

export const DefCard = styled.div`
  background-color: white;
  background-image: url("images/diverse-workers.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  width: 450px;
  height: 525px;
  flex-shrink: 0;

  @media (max-width: ${contentfulWidth}) {
    width: 310px;
    height: 400px;
  }

  @media (max-width: ${mediumWidth}) {
    background-size: auto 100%;
    margin-top: 45px;
    padding: 75px;
    width: 100%;
  }
`;

export const ShadowCard = styled.div`
  background-color: white;
  background-image: url("images/coop.jpeg");
  background-position: right;
  background-size: auto 100%;
  background-repeat: no-repeat;
  width: 350px;
  height: 450px;
  flex-shrink: 0;
  position: relative;
  right: 50px;
  border: 10px solid white;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;

  @media (max-width: ${contentfulWidth}) {
    width: 230px;
    height: 264px;
  }

  @media (max-width: ${mediumWidth}) {
    right: auto;
    bottom: 50px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 35px;
  width: 100%;

  & > h1 {
    font-family: "Mako";
    font-size: 2.5rem;
    margin: 0;
  }

  & > p {
    font-family: "Open Sans", sans-serif;
    margin: 20px 0 35px 0;

    & > a {
      text-decoration: none;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media (max-width: ${mediumWidth}) {
    position: relative;
    bottom: 40px;
    padding: 10px 30px;
    text-align: center;
    display: flex;
    align-items: center;
  }
`;
