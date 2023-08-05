// import { Lefside_child } from "./child_components/Lefside_child";

export function Lefside({ setValue }) {
  const handleChange = (event) => {
    setValue(event.target.checked);
  };
  return (
    <div className="lefside_container">
      <input
        type="checkbox"
        id="fulltime"
        name="fullTime"
        onChange={handleChange}
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
      </span>
    </div>
  );
}
