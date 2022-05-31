import { AddUser } from "src/components/addUser/AddUser";
import { AuthInfo } from "src/components/authInfo/AuthInfo";
import { UserList } from "src/components/userList/UserList";
import styles from "./Home.view.module.css";

export const HomeView = () => {

  return (
    <section className={styles.HomeView}>
      <aside>
        <AuthInfo />
      </aside>
      <aside>
        <AddUser />
      </aside>
      <main>
        <UserList />
      </main>
    </section>
  )
};