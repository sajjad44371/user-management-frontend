import React, { use } from "react";
import User from "./User";
import { useState } from "react";

const Users = ({ userPromise }) => {
  const initialUsers = use(userPromise);
  const [users, setUsers] = useState(initialUsers);

  const handleAddUser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const newUser = { name, email };
    // Send data to the server
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("After post: ", data);
        const newUsers = [...users, data];
        setUsers(newUsers);
        e.target.reset();
      })
      .catch((err) => {
        console.log("Error happened", err);
      });
  };

  return (
    <>
      <div>
        <h3>Add User</h3>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" placeholder="Enter Name" />
          <br />
          <input type="email" name="email" placeholder="Enter Email" />
          <br />
          <button>Add</button>
        </form>
        <div className="grid">
          {users.map((user) => (
            <User id={user.id} user={user}></User>
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
