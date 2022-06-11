import styled from 'styled-components';
import { orange, black } from '../../Global';

export const InvButton = styled.button`
  background-color: white;
  border: 2px solid ${({ color }) => (color ? color : orange)};
  cursor: pointer;
  width: 160px;
  height: 45px;
  font-size: 1rem;
  font-family: 'Open Sans';
  font-weight: bold;
  color: ${({ textColor }) => (textColor ? textColor : black)};

  &:hover {
    background-color: ${({ color }) => (color ? color : orange)};
    color: ${({ textColorInv }) => (textColorInv ? textColorInv : 'white')};
  }
`;
