import styled from "styled-components"
import { contentfulWidth, mediumWidth, mobileWidth } from '../../Global'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export const Content = styled.div`
    width: ${contentfulWidth};
    height: 450px;
    position: relative;
    top: 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align:center;

    & > h1 {
        font: 3rem 'Mako';
        margin: 0;
    }

    & > p {
        font: 1rem 'Open Sans';

        & > a {
            text-decoration: none;
            text-decoration: underline;
            cursor: pointer;
        }
    }
`

export const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 40px;
    height: max-content;
`
    
export const NumberedCard = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    width: 320px;
`

export const Img = styled.img`
    width: 100%;
    height: auto;
`

export const CardDetail = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    margin-top: 20px;
    flex-grow: 1;
`

export const Number = styled.h1`
    margin: 0;
    font: 2.2rem 'Mako';
    color: white;
    white-space: nowrap;
`

export const TextBox = styled.div`
    width: auto;
    display: block;
    margin: 0 0 0 30px;
`

export const Caption = styled.p`
    width: 100%;
    font: 1rem 'Open Sans';
    line-height: 1.5;
    color: white;
    margin: 8px 0 35px 0;
`

export const Link = styled.a`
    font: 0.87rem 'Open Sans', sans-serif;
    letter-spacing: 1px;
    font-weight: bold;
    padding-bottom: 5px;
    color: white;
    text-decoration: none;
    border-bottom: 1px solid white;
`