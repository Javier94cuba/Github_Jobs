export function Search_method() {
  return (
    <div className="search_method_container">
      <textarea
        className="idtextarea"
        cols="32"
        placeholder="Title, companies, expertise or benefits"
      ></textarea>
      <button type="submit">Search</button>
    </div>
  );
}
