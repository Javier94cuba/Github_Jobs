import backgroundImg from "../assets/images/backgroundImg.png";
import { Search_method } from "./Search_method";

export function Search() {
  return (
    <>
      <div className="search_container">
        <img src={backgroundImg} />
        <Search_method />
      </div>
    </>
  );
}
