import { Lefside_child } from "./child_components/Lefside_child.jsx";

export function Lefside() {
  return (
    <div className="lefside_container">
      <input
        type="checkbox"
        id="fulltime"
        name="fulltime_checkbox"
        value="Full time"
      />
      <span id="fulltime_span">Full time</span>
      <p id="location_text">Location</p>
      <textarea
        className="id_lefsection_tetxtarea"
        cols="22"
        placeholder="City, state, zip code or country"
      ></textarea>
      <span id="countrys_imput">
        <br />
        <Lefside_child country="London" />
        <Lefside_child country="Amsterdan" />
        <Lefside_child country="New York" ischeked={true} />
        <Lefside_child country="Berlin" />
      </span>
    </div>
  );
}
