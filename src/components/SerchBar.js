import "./SerchBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function SerchBar({searchData}) {
  const [searchInput, setSearchInput] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    searchData(searchInput)
  }

  return (
    <div className="SearchContainer">
      <form onSubmit={(e) => submitHandler(e)} className="SearchForm">
        <Link to="/" className="logo">
          FreeGamesDb
        </Link>
        <input
          className="SearchInput"
          placeholder="Search For Free games"
          value={searchInput}
          onChange={(e) => (setSearchInput(e.target.value))}
        />
        <button className="SearchButton">Search</button>
      </form>
    </div>
  );
}
export default SerchBar;
