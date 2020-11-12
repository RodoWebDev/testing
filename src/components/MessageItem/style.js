import styled from '@emotion/styled'

export const MessageItemContainer = styled.div`
  display: flex;
  &.right {
    flex-direction: row-reverse;
    .content {
      margin-right: 15px;
    }
  }
  &.left {
    .content {
      margin-left: 15px;
    }
  }
  .content {
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 15px;
  }
`;
