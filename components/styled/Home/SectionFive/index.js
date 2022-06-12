import styled from 'styled-components';
import { black, contentfulWidth } from '../../Global';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColorBlock = styled.div`
  background-color: rgb(85, 92, 102);
  position: absolute;
  height: 30%;
  width: 100%;
`;

export const Content = styled.div`
  height: 1330px;
  width: ${contentfulWidth};
  background-color: red;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 50px;
  & > div {
    border: 1px solid black;
  }
`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-grow: 1;
`;

export const Card = styled.div`
  flex-grow: 1;
  border: 1px solid black;
`;
