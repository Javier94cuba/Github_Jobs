import { Banner } from "../components/Banner";
import { Search } from "../components/Search";
import { Lefside } from "../components/Lefside";
import { Rightside } from "../components/Rightside";
import { useState } from "react";

export function Home() {
  const [value, setValue] = useState(false);
  const [search, setSearch] = useState("");

  console.log(search);
  return (
    <div className="ui_container">
      <Banner />
      <Search setSearch={setSearch} />
      <div className="flex_siders">
        <Lefside setValue={setValue} />
        <Rightside value={value} search={search} />
      </div>
    </div>
  );
}
