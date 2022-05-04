import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";

export default function LoginScreen() {
  return (
    <Container>
      <h1>MyWallet</h1>
      <form action="">
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/cadastrar">
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </Container>
  );
}
