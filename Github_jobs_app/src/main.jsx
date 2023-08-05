import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global_style.scss";

import { BrowserRouter } from "react-router-dom";
import { My_Routes } from "./routes/My_Routes";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <My_Routes />
  </BrowserRouter>
);
