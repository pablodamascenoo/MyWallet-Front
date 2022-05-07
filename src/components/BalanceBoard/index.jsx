import React, { useState } from "react";

import Transaction from "../Transaction";

import { Box } from "./style";

export default function BalanceBoard({ extract }) {
  let values = extract.map((item) => {
    let value = item.value.replace(/\,/, ".");
    if (item.type === "income") return value * 1;
    if (item.type === "outgoing") return value * -1;
  });

  return (
    <Box>
      {extract.length > 0 ? (
        extract.map((value) => {
          return <Transaction obj={value} />;
        })
      ) : (
        <h2>Não há registros de entrada ou saída</h2>
      )}
    </Box>
  );
}
