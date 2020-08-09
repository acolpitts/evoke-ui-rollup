import styled from '@emotion/styled';
import * as colors from 'styles/colors';

const ButtonBase = styled.button`
  padding: 10px 20px;
  border: none;
  color: ${colors.white};
  background: ${colors.red};
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default ButtonBase;
