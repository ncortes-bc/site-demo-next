import styled from 'styled-components';
import { black, contentfulWidth, mediumWidth, mobileWidth } from '../../Global';

export const Container = styled.div`
  position: relative;
  background-color: ${black};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: ${contentfulWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
  z-index: 1;

  & > h1 {
    margin: 0 25px 50px 25px;
    color: white;
    font: 4.5rem 'Mako';
    font-weight: 400;
    text-align: center;
  }

  @media (max-width: ${contentfulWidth}) {
    width: 100%;
  }

  @media (max-width: ${mobileWidth}) {
    & > h1 {
      font-size: 3rem;
    }
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;

  & > img {
    width: 60%;
    height: 60%;
    margin-top: 40px;
  }

  @media (max-width: ${contentfulWidth}) {
    flex-direction: column;
    align-items: center;

    & > img {
      width: 100%;
      padding: 10px 100px;
    }
  }

  @media (max-width: ${mobileWidth}) {
    & > img {
      padding: 0;
      width: 325px;
    }
  }
`;

export const Card = styled.div`
  display: block;
  margin-right: 45px;

  & > h1 {
    font: 36px 'Mako';
  }

  & > p {
    margin-bottom: 30px;
    font: 16px 'Open Sans', sans-serif;
    font-weight: 600;
  }

  & > img {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${contentfulWidth}) {
    margin: 10px 100px;
  }

  @media (max-width: ${mobileWidth}) {
    width: 325px;
  }
`;

export const ColorBlock = styled.div`
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  height: 40%;

  @media (max-width: ${contentfulWidth}) {
    height: 60%;
  }

  @media (max-width: ${mediumWidth}) {
    height: 65%;
  }
`;
