import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../LoginScreen/style";

export default function RegisterScreen() {
  return (
    <Container>
      <h1>MyWallet</h1>
      <form action="">
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirme a senha" />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </Container>
  );
}
