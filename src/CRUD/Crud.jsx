import React, { useState } from "react";
import { UsersList } from "./Users";

export default function Crud() {
  const [users, setUsers] = useState(UsersList);
  const [newUser, setNewUser] = useState("");
  const [name, setUpdatedName] = useState("");

  const AddUser = () => {
    const addNewUser = {
      id: Date.now(),
      name: newUser,
    };
    setUsers([...users, addNewUser]);
    // users.push(addNewUser);
    setNewUser("");
  };

  const DeleteUser = (id) => {
    console.log(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = () => {
    let findUser = users.find((user) => user.name === name);
    findUser.name = newUser;
    setNewUser("");
  };

  return (
    <div>
      {users.map((value, index) => {
        return (
          <div key={value.id}>
            {value.name}
            <button onClick={() => DeleteUser(value.id)}>Delete</button>
          </div>
        );
      })}

      <div>
        <br />
        <br />
        <input
          type="text"
          value={newUser}
          placeholder="Enter Name"
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button onClick={AddUser}>Add User</button>
      </div>

      <div>
        <br />
        <br />
        update user
        <input
          type="text"
          placeholder="enter updated user name "
          onChange={(e) => setUpdatedName(e.target.value)}
        />
        <input
          type="text"
          placeholder="new name"
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button onClick={updateUser}>Update</button>
      </div>
    </div>
  );
}
