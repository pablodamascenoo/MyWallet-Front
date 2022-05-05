import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { Container } from "./style";

export default function LoginScreen() {
  const [login, SetLogin] = useState({ email: "", password: "" });

  const Navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(login.email)) {
      alert("O email deve ser preenchido corretamente");
      return;
    }

    axios
      .post("http://192.168.184.104:5000/login", { ...login })
      .then(() => {
        alert("deu certo yeeeee");
      })
      .catch((error) => {
        alert("deu merda vish");
      });
  }

  return (
    <Container>
      <h1>MyWallet</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          required
          value={login.email}
          onChange={(e) => {
            SetLogin({ ...login, email: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          value={login.password}
          onChange={(e) => {
            SetLogin({ ...login, password: e.target.value });
          }}
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/cadastrar">
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </Container>
  );
}
