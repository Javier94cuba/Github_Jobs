import { useState } from "react";
import backgroundImg from "../assets/images/backgroundImg.png";

export function Search({ setSearch }) {
  return (
    <>
      <div className="search_container">
        <img src={backgroundImg} />
        <div className="search_method_container">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSearch(event.target.search.value);
            }}
          >
            <input type="text" name="search" className="imput_text"></input>
            <button type="submit" onSubmit={setSearch}>
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
