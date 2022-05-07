import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./LoginScreen/";
import RegisterScreen from "./RegisterScreen";
import BalanceScreen from "./BalanceScreen";
import TransactionScreen from "./TransactionScreen";
import UserContext from "../contexts/UserContext";

import GlobalStyle from "../assets/global_styles/GlobalStyle";
import Reset from "../assets/global_styles/Reset";

export default function App() {
  const [userInfo, SetUserInfo] = useState(
    JSON.parse(localStorage.getItem("UserInfo"))
  );

  return (
    <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <UserContext.Provider value={{ userInfo, SetUserInfo }}>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastrar" element={<RegisterScreen />} />
          <Route path="/carteira" element={<BalanceScreen />} />
          <Route
            path="/entrada"
            element={<TransactionScreen type={"income"} />}
          />
          <Route
            path="/saida"
            element={<TransactionScreen type={"outgoing"} />}
          />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
