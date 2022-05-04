import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/global_styles/GlobalStyle";
import Reset from "../assets/global_styles/Reset";
import LoginScreen from "./LoginScreen/";
import RegisterScreen from "./RegisterScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/cadastrar" element={<RegisterScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
