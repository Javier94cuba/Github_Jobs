import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global_style.scss";
import { Banner } from "./components/Banner";
import { Search } from "./components/Search";
import { Lefside } from "./components/Lefside";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="ui_container">
    <Banner />
    <Search />
    <Lefside />
  </div>
);
