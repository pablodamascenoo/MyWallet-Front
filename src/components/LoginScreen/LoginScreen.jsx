import React from "react";

import { Container } from "./style";

export default function LoginScreen() {
  return (
    <Container>
      <h1>MyWallet</h1>
      <form action="">
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}
