import styled from "styled-components"
import { contentfulWidth, black } from '../../Global'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
`

export const Content = styled.div`
    width: ${contentfulWidth};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 60px 0;

    & > h1 {
        margin: 0;
        font: 18px 'Open Sans', sans-serif;
        color: #808080;
    }

    & > h2 {
        margin-top: 10px;
        font: 48px 'Mako';
    }
`

export const TextColumns = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    & > p {
        font: 18px 'Open Sans', sans-serif;
        text-align: left;
        line-height: 1.5;
        margin: 5px 20px;
    }
`