import styled from '@emotion/styled'
import { colors } from '../../styles';

export const MyButtonContainer = styled.button`
  width: ${props => props.width};
  height: 40px;
  border: solid 3px ${colors.grayDark};
  border-radius: 5px;
`;
