import { useState } from "react";
import { AddUser } from "src/components/addUser/AddUser";
import { AuthInfo, IAuthInfoProps } from "src/components/authInfo/AuthInfo";
import { UserList } from "src/components/userList/UserList";
import { IInputUser } from "src/models/user.interface";
import styles from "./Home.view.module.css";

export interface IHomeViewProps {
  authInfoProps: IAuthInfoProps
}

export const HomeView = (props: IHomeViewProps) => {

  const [users, setUsers] = useState([]);

  const onUserAdd = (newRecords: IInputUser[]) => {
    console.log(`User added`, newRecords);
  };

  return (
    <section className={styles.HomeView}>
      <aside>
        <AuthInfo accessToken={props.authInfoProps?.accessToken} />
      </aside>
      <aside>
        <AddUser onUserAdd={onUserAdd} />
      </aside>
      <main>
        <UserList records={users} />
      </main>
    </section>
  )
};