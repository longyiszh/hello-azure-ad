import { UserCard } from "src/components/userCard/UserCard";
import styles from "./UserList.module.css";

export const UserList = () => {
  return (
    <section className="UserList">
      <h2 className="sectionTitle">User List</h2>
      <ul className={styles.userList}>
        <li>
          <UserCard />
        </li>
        <li>
          <UserCard />
        </li>
        <li>
          <UserCard />
        </li>
      </ul>
      {/* <p>No users can be found.</p> */}
    </section>
  );
};