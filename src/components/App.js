import React from "react";
import Navbar from "./Navbar";
import UserList from "./UserlList";
import Search from "./Search";
import Alert from "./Alert";
import UserContextProvider from "../contexts/usersContext";
import ErrorMessageProvider from "../contexts/errorsContext";

const App = () => {
  return (
    <UserContextProvider>
      <Navbar />
      <ErrorMessageProvider>
        <Search />
        <Alert />
      </ErrorMessageProvider>
      <UserList />
    </UserContextProvider>
  );
};

export default App;
