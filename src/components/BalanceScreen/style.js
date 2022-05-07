import styled from "styled-components";

export const Title = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h1 {
    font-family: "Raleway", sans-serif;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 13px;

  button {
    border: none;
    width: 155px;
    height: 114px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background: #a328d6;
    border-radius: 5px;
    padding: 11px;
  }

  p {
    font-family: "Raleway";
    width: 64px;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
  }
`;
