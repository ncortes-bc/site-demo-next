import styled from 'styled-components';
import {
  contentfulWidth,
  black,
  orange,
  mediumWidth,
  mobileWidth,
} from '../../Global';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${black};
`;

export const OffsetBlock = styled.div`
  width: 100%;
  height: 400px;
  background-color: white;
`;

export const Content = styled.div`
  position: relative;
  bottom: 400px;
  width: ${contentfulWidth};
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: -300px;

  & > h1 {
    font: 3rem 'Mako';
    margin: 0;
    padding: 0 15px;
  }

  & > p {
    font: 1rem 'Open Sans';
    padding: 0 15px;

    & > a {
      text-decoration: none;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media (max-width: ${contentfulWidth}) {
    width: 100%;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 40px;
  margin-bottom: 100px;

  @media (max-width: ${contentfulWidth}) {
    flex-wrap: wrap;
    align-items: center;
  }
`;

export const NumberedCard = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  width: 320px;
  margin: 30px;

  @media (max-width: ${contentfulWidth}) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const CardDetail = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  margin-top: 20px;

  @media (max-width: ${contentfulWidth}) {
    width: 100%;
  }
`;

export const Number = styled.h1`
  margin: 0;
  font: 2.2rem 'Mako';
  color: white;
  white-space: nowrap;
`;

export const TextBox = styled.div`
  width: auto;
  display: block;
  margin: 0 0 0 30px;
`;

export const Caption = styled.p`
  width: 100%;
  font: 1rem 'Open Sans';
  line-height: 1.5;
  color: white;
  margin: 8px 0 35px 0;
`;

export const Link = styled.a`
  font: 0.87rem 'Open Sans', sans-serif;
  letter-spacing: 1px;
  font-weight: bold;
  padding-bottom: 5px;
  color: white;
  text-decoration: none;
  border-bottom: 1px solid white;
`;

export const ConstrContainer = styled.div`
  position: relative;
  width: ${contentfulWidth};
`;

export const TextCard = styled.div`
  position: relative;
  text-align: left;
  z-index: 2;
  margin-left: 40px;
  width: 600px;
  padding: 30px;
  background-color: white;

  & > img {
    width: 75px;
    margin-bottom: 15px;
  }

  & > h1 {
    margin: 0;
    font: 4rem 'Mako';
  }

  & > p {
    line-height: 1.6 !important;
    font: 1rem 'Open Sans', sans-serif;
  }
`;

export const Stripes = styled.img`
  z-index: 0;
  width: 300px;
  height: 300px;
  position: absolute;
  left: 0;
  top: 140px;
`;

export const PictureCard = styled.div`
  position: relative;
  z-index: 1;
  & > img {
    width: 875px;
  }
  margin: -100px 0;
`;

export const Dots = styled.img`
  position: absolute;
  z-index: 3;
  left: 40px;
  width: 200px;
  height: 200px;
`;

export const ComboCard = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: row;
  width: 612px;
  margin-left: calc(${contentfulWidth} - 612px);

  & > .textbox {
    background-color: ${orange};
    width: 50%;
    padding: 40px 30px;
    text-align: left;
    & > h1 {
      margin: 0;
      font: 2rem 'Mako';
    }
    & > p {
      margin: 20px 0;
      font: 1rem 'Open Sans', sans-serif;
    }
  }
  & > .image {
    background-position: center;
    background-size: cover;
    width: 50%;
    background-image: url('images/skyscraper.jpeg');
  }
`;
