import React, { useEffect, useContext, useState } from "react";
import { Container } from "../LoginScreen/style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import UserContext from "../../contexts/UserContext";
import { Title, Box } from "./style";

export default function TransactionScreen({ type }) {
  const { userInfo } = useContext(UserContext);
  const [transaction, SetTransaction] = useState({
    value: "",
    description: "",
  });

  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo?.token}`,
    },
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
      return;
    }
    if (type !== "income" && type !== "outgoing") {
      navigate("/carteira");
      return;
    }
  }, []);

  const typeText = type === "income" ? "entrada" : "saída";

  function handleSubmit(e) {
    e.preventDefault();

    //TODO: Add the number mask to value input

    const promisse = axios.post(
      "https://my-wallet-13.herokuapp.com/balance",
      {
        type,
        value: transaction.value,
        description: transaction.description,
      },
      config
    );

    promisse.then(() => {
      navigate("/carteira");
    });

    promisse.catch((error) => {
      alert(error);
    });
  }

  return (
    <Container>
      <Box>
        <Title>
          <h1>{`Nova ${typeText}`}</h1>
        </Title>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Valor"
            value={transaction.value}
            onChange={(e) => {
              SetTransaction({ ...transaction, value: e.target.value });
            }}
          />
          <input
            type="text"
            max={25}
            placeholder="Descrição"
            value={transaction.description}
            onChange={(e) => {
              SetTransaction({ ...transaction, description: e.target.value });
            }}
          />
          <button>{`Salvar ${typeText}`}</button>
        </form>
      </Box>
    </Container>
  );
}
