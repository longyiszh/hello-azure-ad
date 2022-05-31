import { UserCard } from "src/components/userCard/UserCard";
import { IUser } from "src/models/user.interface";
import styles from "./UserList.module.css";

export interface IUserListProps {
  records: IUser[]
}

export const UserList = (props: IUserListProps) => {

  const displayedUserList = props.records.map(ele => (
    <li key={ele.id}>
      <UserCard id={ele.id} name={ele.name} description={ele.description} />
    </li>
  ));

  return (
    <section className="UserList">
      <h2 className="sectionTitle">User List</h2>
      <ul className={styles.userList}>
        {displayedUserList}
      </ul>
      {displayedUserList.length <= 0 ? <p className={styles.infoNoRecords}>No users can be found.</p> : null}
    </section>
  );
};