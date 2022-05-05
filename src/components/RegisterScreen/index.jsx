import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Container } from "../LoginScreen/style";

export default function RegisterScreen() {
  const [register, SetRegister] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const Navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(register.email)) {
      alert("O email deve ser preenchido corretamente");
      return;
    }

    if (register.password !== register.repassword) {
      alert("As senhas devem coincidir");
      return;
    }

    axios
      .post("http://192.168.184.104:5000/cadastro", { ...register })
      .then(() => {
        Navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Container>
      <h1>MyWallet</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={register.name}
          onChange={(e) => {
            SetRegister({ ...register, name: e.target.value });
          }}
          placeholder="Nome"
        />
        <input
          type="email"
          value={register.email}
          onChange={(e) => {
            SetRegister({ ...register, email: e.target.value });
          }}
          placeholder="E-mail"
        />
        <input
          type="password"
          value={register.password}
          onChange={(e) => {
            SetRegister({ ...register, password: e.target.value });
          }}
          placeholder="Senha"
        />
        <input
          type="password"
          value={register.repassword}
          onChange={(e) => {
            SetRegister({ ...register, repassword: e.target.value });
          }}
          placeholder="Confirme a senha"
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </Container>
  );
}
