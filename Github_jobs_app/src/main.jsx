import React from "react";
import ReactDOM from "react-dom/client";
import { Banner } from "./components/Banner";
import { Search } from "./components/Search";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Banner />
      <Search />
    </>
  </React.StrictMode>
);
