import styled from '@emotion/styled'
import { colors } from '../../styles';

export const MyInputContainer = styled.input`
  width: ${props => props.width};
  height: 37px;
  border: solid 1px ${colors.grayLight};
  border-radius: 5px;
  padding: 0 10px;
`;
