import styled from 'styled-components';
import {
  orange,
  black,
  contentfulWidth,
  mediumWidth,
  mobileWidth,
} from '../../Global';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 90px;

  & > h1 {
    font: 3rem 'Mako';
    color: white;
    z-index: 1;
  }
`;

export const ColorBlock = styled.div`
  background-color: rgb(85, 92, 102);
  position: absolute;
  height: 45%;
  width: 100%;
`;

export const Content = styled.div`
  width: ${contentfulWidth};
  z-index: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: ${contentfulWidth}) {
    width: ${mediumWidth};
  }

  @media (max-width: ${mediumWidth}) {
    width: 100%;
  }
`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-grow: 1;
  height: 100%;

  @media (max-width: ${mediumWidth}) {
    flex-direction: column;
    width: ${mobileWidth};
    margin: auto;
  }

  @media (max-width: ${mobileWidth}) {
    width: 90%;
  }
`;

export const Card = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background-size: cover;
  background-position: center;

  & > h1 {
    margin: 0;
    font: 30px 'Mako';
  }

  & > p {
    font: 14px 'Open Sans', sans-serif;
    margin-bottom: 25px;
  }

  & > p2 {
    font: 16px 'Open Sans', sans-serif;
    color: white;
  }

  & > img {
    margin-bottom: 20px;
    width: 70px;
    height: 70px;
  }

  @media (max-width: ${mediumWidth}) {
    min-height: 300px;
  }

  ${(props) => {
    if (props.className === 'a') return `background-color: ${orange};`;
    if (props.className === 'b')
      return `background-image: url('images/canvas-working.jpeg'); `;
    if (props.className === 'c')
      return `background-image: url('images/close-up-building.jpeg');`;
    if (props.className === 'd')
      return `background-color: ${black}; padding: 60px 35px; `;
    if (props.className === 'e')
      return `background-image: url('images/low-angle-building.jpeg');`;
    if (props.className === 'f')
      return `background-image: url('images/construction-man-2.jpeg');`;
    if (props.className === 'g') return `background-color: white;`;
  }}
`;
