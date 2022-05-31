import { useState } from "react";
import { AddUser } from "src/components/addUser/AddUser";
import { AuthInfo, IAuthInfoProps } from "src/components/authInfo/AuthInfo";
import { UserList } from "src/components/userList/UserList";
import styles from "./Home.view.module.css";

export interface IHomeViewProps {
  authInfoProps: IAuthInfoProps
}

export const HomeView = (props: IHomeViewProps) => {

  const [users, setUsers] = useState([{id: "1", name: "bibi", description: "aaho"}]);

  return (
    <section className={styles.HomeView}>
      <aside>
        <AuthInfo accessToken={props.authInfoProps?.accessToken} />
      </aside>
      <aside>
        <AddUser />
      </aside>
      <main>
        <UserList records={users} />
      </main>
    </section>
  )
};