import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import BalanceBoard from "../BalanceBoard";

import UserContext from "../../contexts/UserContext";

import logout from "./../../assets/images/logout.svg";
import plus from "./../../assets/images/plus-circle.svg";
import minus from "./../../assets/images/minus-circle.svg";

import { Container } from "../LoginScreen/style";
import { Title, ButtonBox } from "./style";

export default function BalanceScreen() {
  const [extract, SetExtract] = useState([]);
  const { userInfo } = useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo?.token}`,
    },
  };

  useEffect(() => {
    const promisse = axios.get("http://localhost:5000/balance", config);

    promisse.then((obj) => {
      const { data } = obj;
      SetExtract([...data]);
    });
  }, []);

  return (
    <Container>
      <Title>
        <h1>Olá, {userInfo.name}</h1>
        <img src={logout} alt="log-out" />
      </Title>
      <BalanceBoard extract={extract} />
      <ButtonBox>
        <button>
          <img src={plus} alt="mais" />
          <p>Nova entrada</p>
        </button>
        <button>
          <img src={minus} alt="menos" />
          <p>Nova saída</p>
        </button>
      </ButtonBox>
    </Container>
  );
}
