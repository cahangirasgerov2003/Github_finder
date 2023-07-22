import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/usersContext";

let event = null;

const Search = ({ createErrorMessage }) => {
  const [keyword, setKeyword] = useState("");
  const { clearResult, users, searchResult } = useContext(UserContext);

  const searchGithub = (e) => {
    e.preventDefault();
    event = e;
    setKeyword(e.target.previousSibling.value);
  };

  useEffect(() => {
    if (keyword !== "") {
      searchResult(keyword);
      event.target.previousSibling.value = "";
      createErrorMessage(null, null);
    } else {
      createErrorMessage("You are expected to enter a keyword!", "danger");
    }
  }, [keyword]);

  return (
    <div className="container my-3">
      <form className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Anahtar Kelime"
        ></input>
        <button
          className="btn btn-primary"
          type="button"
          onClick={searchGithub}
        >
          Search
        </button>
      </form>
      {users.length > 0 ? (
        <button
          type="button"
          className="btn btn-outline-danger w-100"
          onClick={clearResult}
        >
          Clear
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
