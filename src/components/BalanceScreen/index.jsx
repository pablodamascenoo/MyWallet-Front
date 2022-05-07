import React from "react";
import axios from "axios";

import BalanceBoard from "../BalanceBoard";

import logout from "./../../assets/images/logout.svg";
import plus from "./../../assets/images/plus-circle.svg";
import minus from "./../../assets/images/minus-circle.svg";

import { Container } from "../LoginScreen/style";
import { Title, ButtonBox } from "./style";

export default function BalanceScreen() {
  return (
    <Container>
      <Title>
        <h1>Olá, Fulano</h1>
        <img src={logout} alt="log-out" />
      </Title>
      <BalanceBoard values={[1, 2, 3, 4, 5]} />
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
