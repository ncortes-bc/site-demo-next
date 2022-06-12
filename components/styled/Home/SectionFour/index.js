import styled from 'styled-components';
import { black, contentfulWidth } from '../../Global';

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
    margin: 0 0 50px 0;
    color: white;
    font: 4.5rem 'Mako';
    font-weight: 400;
    text-align: center;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > img {
    width: 60%;
    height: 60%;
    margin-top: 40px;
  }
`;

export const Card = styled.div`
  background-color: white;
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
`;

export const ColorBlock = styled.div`
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  height: 425px;
`;
