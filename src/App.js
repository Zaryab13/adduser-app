import React, { useState } from "react";
import Adduser from "./components/users/addUser/Adduser";
import UserList from "./components/users/userList/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsers) => {
      return [
        ...prevUsers,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <Adduser onAddUser={addUserHandler}></Adduser>
      <UserList users={usersList}></UserList>
    </div>
  );
}
export default App;
