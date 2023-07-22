import React, { useState } from "react";
import Navbar from "./Navbar";
import UserList from "./UserlList";
import Search from "./Search";
import Alert from "./Alert";
import UserContextProvider from "../contexts/usersContext";

const App = () => {
  const [error, setError] = useState(null);

  const createErrorMessage = (mes, type) => {
    if (mes && type) {
      // dispatch({
      //   type: "CLEAR_RESULT",
      // });
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
    <UserContextProvider>
      <Navbar />
      <Search createErrorMessage={createErrorMessage} />
      {error !== null ? <Alert error={error} /> : ""}
      <UserList />
    </UserContextProvider>
  );
};

export default App;
