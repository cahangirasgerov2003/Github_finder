import React, { useState, useReducer } from "react";
import Navbar from "./Navbar";
import UserList from "./UserlList";
import Search from "./Search";
import Alert from "./Alert";
import UserReducer from "../reducers/usersReducer";
import UserContext from "../contexts/usersContext";

const App = () => {
  const [state, dispatch] = useReducer(UserReducer, {
    users: [],
    loading: false,
  });

  const [error, setError] = useState(null);

  const searchResult = (keyword) => {
    dispatch({
      type: "LOADING",
    });
    setTimeout(() => {
      window
        .fetch(`https://api.github.com/search/users?q=${keyword}`)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          dispatch({
            type: "ADD_USERS",
            users: response.items,
          });
        });
    }, 500);
  };

  const clearResult = () => {
    dispatch({
      type: "CLEAR_RESULT",
    });
  };

  const createErrorMessage = (mes, type) => {
    if (mes && type) {
      dispatch({
        type: "CLEAR_RESULT",
      });
      setError({
        mes,
        type,
      });
      setTimeout(() => {
        setError(null);
      }, 10000);
    } else {
      setError(null);
    }
  };

  return (
    <UserContext.Provider
      value={{
        icon: "bi bi-github",
        title: "Github",
        searchResult,
        clearResult,
        users: state.users,
        createErrorMessage,
        loading: state.loading,
      }}
    >
      <Navbar />
      <Search
      // controlUsers={state.users}
      // createErrorMessage={createErrorMessage}
      />
      {error !== null ? <Alert error={error} /> : ""}
      <UserList />
    </UserContext.Provider>
  );
};

export default App;
