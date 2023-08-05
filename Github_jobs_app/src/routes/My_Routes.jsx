import { Route, Routes } from "react-router-dom";
import { Kasisto_work } from "../pages/Kasisto_work";
import { Home } from "../pages/Home";
export function My_Routes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/work" element={<Kasisto_work />} />
    </Routes>
  );
}
