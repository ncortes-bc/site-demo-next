import styled from 'styled-components'
import { orange } from '../../Global'

export const InvButton = styled.button`
    background-color: white;
    border: 2px solid ${orange}
    cursor: pointer;

    &:hover {
        background-color: ${orange};
    }
`