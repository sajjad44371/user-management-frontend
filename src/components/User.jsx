import React from "react";

const User = ({ user }) => {
  return (
    <>
      <div className="container">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </>
  );
};

export default User;
