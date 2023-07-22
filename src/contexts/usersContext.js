import React, { useReducer } from "react";
import UserReducer from "../reducers/usersReducer";

export const UserContext = React.createContext();

const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(UserReducer, {
    users: [],
    loading: false,
  });

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

  return (
    <UserContext.Provider
      value={{
        clearResult,
        searchResult,
        users: state.users,
        loading: state.loading,
        icon: "bi bi-github",
        title: "Github",
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
