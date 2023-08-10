import { useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import styles from "./Adduser.module.css";
import ErrorModal from "../../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.length === 0) {
        setError({
            title: "Invalid Inputs",
            message: "Plz! Fill the inputs (Can't Submit Empty Form)",
        });
      return;
    }
    if (+enteredAge < 1) {
        setError({
            title: "Invalid Age",
            message: "Can not type invalid age ( < 0)",
        });
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
  const closeModalHandler = () => {
    setError(null);
    console.log('Clicked')
  }
  

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={closeModalHandler}/>}
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
    </div>
  );
};

export default AddUser;
