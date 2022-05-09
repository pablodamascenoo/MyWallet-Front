import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

import { Container } from "./style";

export default function LoginScreen() {
  const [login, SetLogin] = useState({ email: "", password: "" });
  const { SetUserInfo } = useContext(UserContext);

  const Navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(login.email)) {
      alert("O email deve ser preenchido corretamente");
      return;
    }

    if (login.password.length < 3 || login.password.length > 30) {
      alert("A senha deve conter entre 3 e 30 caracteres");
      return;
    }

    axios
      .post("https://my-wallet-13.herokuapp.com/login", { ...login })
      .then((obj) => {
        const { data } = obj;
        localStorage.setItem(
          "UserInfo",
          JSON.stringify({ token: data.token, name: data.name })
        );
        SetUserInfo({ token: data.token, name: data.name });
        Navigate("/carteira");
      })
      .catch((error) => {
        alert(error);
        console.log(
          error.response.status === 401
            ? "email e/ou senha incorretos!"
            : error.response.message
        );
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
