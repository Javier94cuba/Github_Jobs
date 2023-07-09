export function Lefside_child({ country, ischeked = false }) {
  return (
    <>
      <input name="countrys" type="radio" value="" checked={ischeked} />
      {country}
      <br />
    </>
  );
}
