import { useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import styles from "./Adduser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.length === 0) {
        return;
    }
    if (enteredAge < 1) {
        return;
    }
    props.onAddUser(enteredName, enteredAge);


    setEnteredName("");
    setEnteredAge("");
  };

  const enteredNameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const enteredAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={enteredNameHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={enteredAgeHandler}
        />
        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
