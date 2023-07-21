import React, { useCallback, useEffect, useState } from "react";

let event = null;

const Search = ({
  clearResult,
  controlUsers,
  searchResult,
  createErrorMessage,
}) => {
  const [keyword, setKeyword] = useState("");

  const searchGithub = (e) => {
    e.preventDefault();
    event = e;
    setKeyword(e.target.previousSibling.value);
  };

  const searchResultCallback = useCallback(() => {
    searchResult(keyword);
  }, [keyword]);

  const createErrorMessageCallback = useCallback(() => {
    if (keyword !== "") {
      createErrorMessage(null, null);
    } else {
      createErrorMessage("You are expected to enter a keyword!", "danger");
    }
  }, [keyword]);

  useEffect(() => {
    if (keyword !== "") {
      searchResultCallback();
      event.target.previousSibling.value = "";
      createErrorMessageCallback();
    } else {
      createErrorMessageCallback();
    }
  }, [keyword, searchResultCallback, createErrorMessageCallback]);

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
      {controlUsers.length > 0 ? (
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
