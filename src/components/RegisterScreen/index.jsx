import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Container } from "../LoginScreen/style";
import LoaderSpinner from "../LoaderSpinner";

export default function RegisterScreen() {
  const [register, SetRegister] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [submited, SetSubmited] = useState(false);

  const Navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    SetSubmited(true);

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(register.email)) {
      alert("O email deve ser preenchido corretamente");
      SetSubmited(false);
      return;
    }

    if (register.password !== register.repassword) {
      alert("As senhas devem coincidir");
      SetSubmited(false);
      return;
    }

    axios
      .post("https://my-wallet-13.herokuapp.com/cadastro", { ...register })
      .then(() => {
        SetSubmited(false);
        Navigate("/");
      })
      .catch((e) => {
        alert(e.response.data);
        console.log(e);
        SetSubmited(false);
      });
  }

  return (
    <Container>
      <h1>MyWallet</h1>
      <form onSubmit={handleSubmit}>
        <input
          disabled={submited}
          type="text"
          value={register.name}
          onChange={(e) => {
            SetRegister({ ...register, name: e.target.value });
          }}
          placeholder="Nome"
        />
        <input
          disabled={submited}
          type="email"
          value={register.email}
          onChange={(e) => {
            SetRegister({ ...register, email: e.target.value });
          }}
          placeholder="E-mail"
        />
        <input
          disabled={submited}
          type="password"
          value={register.password}
          onChange={(e) => {
            SetRegister({ ...register, password: e.target.value });
          }}
          placeholder="Senha"
        />
        <input
          disabled={submited}
          type="password"
          value={register.repassword}
          onChange={(e) => {
            SetRegister({ ...register, repassword: e.target.value });
          }}
          placeholder="Confirme a senha"
        />
        <button type="submit">
          {submited ? <LoaderSpinner /> : "Cadastrar"}
        </button>
      </form>
      <Link to="/">
        <p>J?? tem uma conta? Entre agora!</p>
      </Link>
    </Container>
  );
}
