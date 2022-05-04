import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Saira Stencil One", cursive;
    color: white;
    font-size: 32px;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
    font-size: 15px;
  }

  form {
    margin: 24px 0 36px 0;
  }
`;
