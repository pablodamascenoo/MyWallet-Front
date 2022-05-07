import React from "react";

import { Date, Amount, Line } from "./style";

export default function Transaction({ obj }) {
  return (
    <Line>
      <span>
        <Date>{obj.date}</Date>
        {` ${obj.description}`}
      </span>
      <Amount type={obj.type}> {obj.value} </Amount>
    </Line>
  );
}
