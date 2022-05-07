import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./LoginScreen/";
import RegisterScreen from "./RegisterScreen";
import BalanceScreen from "./BalanceScreen";
import UserContext from "../contexts/UserContext";

import GlobalStyle from "../assets/global_styles/GlobalStyle";
import Reset from "../assets/global_styles/Reset";

export default function App() {
  const [userInfo, SetUserInfo] = useState(
    JSON.parse(localStorage.getItem("UserInfo"))
  );

  console.log(userInfo);

  return (
    <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <UserContext.Provider value={{ userInfo, SetUserInfo }}>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastrar" element={<RegisterScreen />} />
          <Route path="/transacoes" element={<BalanceScreen />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
