import styled from 'styled-components';
import { mobileWidth, black, orange } from '../../Global';

export const Container = styled.div`
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
`;

export const Block = styled.div`
  position: fixed;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: white;
  border-right: 5px solid ${orange};

  & > .close {
    width: 25px;
    height: 25px;
    margin: 20px;
    margin-left: calc(100% - 50px);
    cursor: pointer;

    &:hover {
      color: ${orange};
    }
  }

  @media (max-width: ${mobileWidth}) {
    width: 100%;
    border: none;
  }
`;

export const List = styled.div`
  width: max-content;
  margin: 20px 20px;

  @media (max-width: ${mobileWidth}) {
    text-align: center;
    margin: 0 auto;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: block;
  color: ${black};
  margin: 20px;
  font: 16px 'Open Sans', sans-serif;
  font-weight: bold;

  &:hover {
    color: ${orange};
  }
`;
