import styled from 'styled-components';
import { contentfulWidth, mediumWidth, mobileWidth, mediumSide, orange } from '../../Global';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: ${orange}
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(${contentfulWidth} + ${mediumSide});
    height: 100%;

    @media(max-width: ${mediumWidth}) {
        flex-direction: column-reverse;
        width: 550px;

        & > * {
            width: 100% !important;
        }
    }

    @media(max-width: 550px) {
        width: 100%;
    }
`

export const Circle = styled.div`
    background-color: ${orange};
    width: 90px;
    height: 90px;
    border-radius: 50%;
`

export const Img = styled.div`
    width: 100%;
    height: 650px;
    background-image: url('images/strong-woman.jpeg');
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
    padding: 60px;

    @media(max-width: ${mediumWidth}) {
        height: 400px;
    }
`

export const Card = styled.div`
    width: 85%;
    background-color: white;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > h1 {
        font-size: 5rem;
        font-family: 'Ubuntu', sans-serif;
        margin: 0;
        line-height: 0.8;
        font-weight: 700;
    }

    & > p {
        font-family: 'Open Sans';
        margin-top: 39px;
        margin-bottom: 34px;
        font-size: 1rem;
        line-height: 1.6;

        & > a {
            text-decoration: none;
            text-decoration: underline;
            cursor: pointer;
            color: black;
        }

        i {
            font-style: italic;
        }
    }

    @media(max-width: ${mobileWidth}) {
        padding: 40px;

        & > h1 {
            font-size: 3.5rem !important;
        }

        & > p {
            font-size: 1rem !important;
        }
    }
`