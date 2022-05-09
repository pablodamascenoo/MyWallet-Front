import styled from "styled-components";

export const Loader = styled.div`
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #8c11be; /* Blue */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
