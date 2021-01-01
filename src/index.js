import React from "react";
import ReactDOM from "react-dom";

const name = "Gerda";
const surname = "Amoraal";
const luckyNumber = 3;

ReactDOM.render(
  <div>
    <h1>Hello {name + " " + surname}!</h1>
    <p>Your lucky number is {luckyNumber}.</p>
  </div>,
  document.getElementById("root")
);
