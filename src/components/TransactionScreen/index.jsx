import React, { useEffect, useContext, useState } from "react";
import { Container } from "../LoginScreen/style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import UserContext from "../../contexts/UserContext";
import { Title, Box } from "./style";
import LoaderSpinner from "../LoaderSpinner";

export default function TransactionScreen({ type }) {
  const { userInfo } = useContext(UserContext);
  const [transaction, SetTransaction] = useState({
    value: "",
    parsedValue: "0,00",
    description: "",
  });
  const [submited, SetSubmited] = useState(false);

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
    SetSubmited(true);

    const promisse = axios.post(
      "https://my-wallet-13.herokuapp.com/balance",
      {
        type,
        value: transaction.parsedValue,
        description: transaction.description,
      },
      config
    );

    promisse.then(() => {
      SetSubmited(false);
      navigate("/carteira");
    });

    promisse.catch((error) => {
      alert(error);
      SetSubmited(false);
    });
  }

  function numberMask(e) {
    let value =
      transaction.parsedValue.length > e.target.value.length
        ? transaction.value.slice(0, transaction.value.length - 1)
        : `${transaction.value}${e.target.value[e.target.value.length - 1]}`;
    value = value.length === 0 ? "0" : value;
    let parsedValue = (parseFloat(value) / 100).toFixed(2);
    parsedValue = parsedValue.toString().replace(/\./, ",");
    SetTransaction({ ...transaction, value, parsedValue });
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
            value={transaction.parsedValue}
            onChange={(e) => {
              numberMask(e);
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
          <button>{submited ? <LoaderSpinner /> : `Salvar ${typeText}`}</button>
        </form>
      </Box>
    </Container>
  );
}
