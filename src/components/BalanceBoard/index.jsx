import React from "react";
import Transaction from "../Transaction";

import { Box, TransactionBox } from "./style";

export default function BalanceBoard({ extract }) {
  let values = extract.map((item) => {
    let value = item.value.replace(/\,/, ".");
    if (item.type === "income") return value * 1;
    if (item.type === "outgoing") return value * -1;
  });

  let balance = 0;
  values.forEach((value) => (balance += value));
  let balanceStr = balance.toFixed(2).toString().replace(/\./, ",");

  return (
    <Box balance={balance}>
      {extract.length > 0 ? (
        <TransactionBox>
          {extract.map((value, index) => {
            return <Transaction key={index} obj={value} />;
          })}
        </TransactionBox>
      ) : (
        <h2>Não há registros de entrada ou saída</h2>
      )}
      {values.length > 0 ? (
        <footer>
          <p>SALDO</p>
          <p>{balanceStr.replace(/\-/, "")}</p>
        </footer>
      ) : (
        <></>
      )}
    </Box>
  );
}
