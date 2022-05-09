import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import BalanceBoard from "../BalanceBoard";

import UserContext from "../../contexts/UserContext";

import logout from "./../../assets/images/logout.svg";
import plus from "./../../assets/images/plus-circle.svg";
import minus from "./../../assets/images/minus-circle.svg";

import { Container } from "../LoginScreen/style";
import { Title, ButtonBox } from "./style";
import { useNavigate } from "react-router-dom";

export default function BalanceScreen() {
  const [extract, SetExtract] = useState([]);
  const { userInfo } = useContext(UserContext);

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
    const promisse = axios.get(
      "https://my-wallet-13.herokuapp.com/balance",
      config
    );

    promisse.then((obj) => {
      const { data } = obj;
      SetExtract([...data]);
    });
  }, []);

  function logOut() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <Container>
      <Title>
        <h1>Olá, {userInfo?.name}</h1>
        <img src={logout} alt="log-out" onClick={logOut} />
      </Title>
      <BalanceBoard extract={extract} />
      <ButtonBox>
        <button
          onClick={() => {
            navigate("/entrada");
          }}
        >
          <img src={plus} alt="mais" />
          <p>Nova entrada</p>
        </button>
        <button
          onClick={() => {
            navigate("/saida");
          }}
        >
          <img src={minus} alt="menos" />
          <p>Nova saída</p>
        </button>
      </ButtonBox>
    </Container>
  );
}
