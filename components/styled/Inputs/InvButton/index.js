import styled from 'styled-components'
import { orange } from '../../Global'

export const InvButton = styled.button`
    background-color: white;
    border: 2px solid ${orange};
    cursor: pointer;
    width: 160px;
    height: 45px;
    font-size: 1rem;
    font-family: 'Open Sans';
    font-weight: bold;

    &:hover {
        background-color: ${orange};
        color: white;
    }
`