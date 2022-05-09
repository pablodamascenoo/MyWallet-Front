import styled from "styled-components";

export const Box = styled.div`
  margin-top: 22px;
  height: 446px;
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  position: relative;
  padding: 23px 12px 12px;

  h2 {
    color: #868686;
    width: 90%;
    max-width: 180px;
    position: absolute;
    top: 50%;
    left: 73px;
    text-align: center;
  }

  footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 12px;
    font-size: 17px;
    font-weight: 700;

    p:last-of-type {
      color: ${(props) => (props.balance >= 0 ? "#03AC00" : "#C70000")};
      font-weight: 400;
    }
  }
`;

export const TransactionBox = styled.div`
  overflow-y: scroll;

  height: 100%;
  padding-bottom: 30px;
`;
