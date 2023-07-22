import React, { useContext } from "react";

import Loading from "./Loading";

import User from "./User";
import { UserContext } from "../contexts/usersContext";

const UserlList = () => {
  const { loading, users } = useContext(UserContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
};

export default UserlList;
