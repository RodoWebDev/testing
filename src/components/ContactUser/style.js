import styled from '@emotion/styled'
import { colors } from '../../styles';

export const ContactUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  border-bottom: solid 1px #EDEDED;
  cursor: pointer;
  &.selected {
    background: #EFF4FF;
    border-left: 5px solid gray;
  }
  &:hover {
    background: #EFF4FF;
  }
  span {
    line-height: 20px;
  }
  .info {
    margin-right: auto;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    .info-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .info--username {
        font-weight: bold;
        color: ${colors.grayDark};
      }
      .info--email {
        font-weight: 400;
        color: ${colors.grayMedium};
        word-break: break-all;
      }
      i.active {
        color: ${colors.grayDark};
      }
      i.inactive {
        color: ${colors.grayLight};
      }
    }
  }
`;
