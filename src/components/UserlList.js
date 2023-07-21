import React from "react";

import Loading from "./Loading";

import User from "./User";

const UserlList = ({ loading, users }) => {
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
