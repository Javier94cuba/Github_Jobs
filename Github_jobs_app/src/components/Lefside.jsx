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
        <input name="countrys" type="radio" value="" />
        London <br />
        <input name="countrys" type="radio" value="" />
        Amsterdam <br />
        <input name="countrys" type="radio" value="" />
        New York <br />
        <input name="countrys" type="radio" value="" />
        Berlin
      </span>
    </div>
  );
}
