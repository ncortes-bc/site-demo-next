import styled from 'styled-components'
import { contentfulWidth } from '../../Global'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid #ccc;
    height: 80px;
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${contentfulWidth};
    padding: 0 30px;

    @media(min-width: 1200px) {
        padding: 0;
    }
`

export const SearchBar = styled.input.attrs({types: 'text', placeholder: 'Search'})`
    border: 1px solid #ccc;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    height: 40px;
    width: 200px;
    padding: 0 10px;
`

export const BurgerMenu = styled.img.attrs({src: './images/menu-icon.svg'})`
    width: 35px;
    height: 35px;
`