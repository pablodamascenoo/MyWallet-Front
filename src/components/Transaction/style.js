import styled from "styled-components";

export const Line = styled.p`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Date = styled.span`
  color: #c6c6c6;
`;

export const Amount = styled.span`
  color: ${(props) => (props.type === "income" ? "#03AC00" : "#C70000")};
`;
