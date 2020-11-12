import styled from '@emotion/styled'

export const ChatContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #ecf1fa;
  .left-side {
    width: 350px;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    filter: drop-shadow(0px 3px 8px rgba(0,0,0,0.07));
    .left-side-header {
      height: 110px;
      border-bottom: solid 1px #EDEDED;
      padding: 15px 30px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .btn-add-user {
          width: 50px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .messagebox-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .messagebox {
      /* overflow: auto; */
      flex: 1;
      margin-right: auto;
      margin-left: auto;
      width: 600px;
    }
    .message-input-container {
      width: 100%;
      background: white;
      display: flex;
      align-items: center;
      .message-input {
        padding: 20px 30px;
        width: 100%;
      }
    }
  }
  .blank {
    width: 400px;
    text-align: center;
    margin: auto;
    color: darkslategray;
    p {
      font-size: 26px;
    }
  }
`;
