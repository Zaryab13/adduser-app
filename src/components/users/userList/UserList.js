import Card from "../../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  let content = (<p>No User! Maybe Add Some</p>);

   if (props.users.length > 0) {
      content = (
        <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
      )
   }

  return (
    <Card className={styles.users}>
      {content}
    </Card>
  );
};

export default UserList;
