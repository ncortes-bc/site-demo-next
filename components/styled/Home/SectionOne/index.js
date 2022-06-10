import styled from 'styled-components'
import { sidebarWidth, contentfulWidth, orange } from '../../Global'

export const Container = styled.section`
    width: 100%;
    height: 620px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ColorBlock = styled.div`
    position: absolute;
    left: 0;
    width: 550px;
    height: 173px;
    background-color: ${orange};
    z-index: 2;
`

export const Content = styled.div`
    width: ${contentfulWidth};
    display: flexbox;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 3;
`

export const DefCard = styled.div`
    background-image: url('images/diverse-workers.jpeg');
    background-position: center;
    width: 450px;
    height: 500px;
`

export const ShadowCard = styled.div`
    background-image: url('images/coop.jpeg');
    background-position: center;
    width: 400px;
    height: 450px;
    position: relative;
    right: 50px;
    border: 10px solid white;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
`

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    & > h1 {
        font-family: 'Mako';
        font-size: 3rem;
    }

    & > p {
        font-family: 'Open Sans', sans-serif;

        & > a {
            text-decoration: none;
            text-decoration: underline;
            cursor: pointer;
        }
    }
`