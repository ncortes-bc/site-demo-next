import styled from 'styled-components';
import { orange } from '../../Global';

export const Button = styled.button`
  background-color: ${({ color }) => (color ? color : orange)};
  border: 2px solid ${({ color }) => (color ? color : orange)};
  cursor: pointer;
  width: 160px;
  height: 45px;
  font-size: 1rem;
  font-family: 'Open Sans';
  font-weight: bold;
  color: ${({ textColor }) => (textColor ? textColor : 'white')};
`;
