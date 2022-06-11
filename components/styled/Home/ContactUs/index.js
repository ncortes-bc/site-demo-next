import styled from 'styled-components';
import {
  contentfulWidth,
  contentfulSide,
  orange,
  black,
  mediumWidth,
  mobileWidth,
} from '../../Global';

export const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: end;
  padding: 70px 0;
`;

export const Content = styled.div`
  width: calc(${contentfulWidth} + ${contentfulSide});
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;

  @media (max-width: ${contentfulWidth}) {
    width: 100%;
  }

  @media (max-width: ${mediumWidth}) {
    width: 80%;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FormContainer = styled.div`
  width: 50%;
  height: 100%;
  padding-right: 30px;
  z-index: 2;

  & > h1 {
    font: 60px 'Mako';
    margin-bottom: 0;
  }

  & > p {
    font: 16px 'Open Sans';
    margin-bottom: 20px;
  }

  @media (max-width: ${mediumWidth}) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const ContactInfo = styled.div`
  background-color: ${black};
  z-index: 2;
  height: 85%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: ${mediumWidth}) {
    width: 100%;
  }
`;

export const ContactEntry = styled.div`
  text-align: center;
  font: 16px 'Open Sans';
  color: white;
  margin: 10px;

  & > img {
    width: 50px;
    height: 50px;
  }
`;

export const SocialBlock = styled.div`
  position: absolute;
  right: 0;
  width: calc(${contentfulSide} + 100px);
  height: 100%;
  background-color: ${orange};
  z-index: 0;

  @media (max-width: ${contentfulWidth}) {
    width: 25%;
  }

  @media (max-width: ${mobileWidth}) {
    display: none;
  }
`;

export const Socials = styled.div`
  position: absolute;
  bottom: 0;
`;
