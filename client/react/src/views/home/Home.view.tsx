import { useEffect, useState } from "react";
import { AddUser } from "src/components/addUser/AddUser";
import { AuthInfo, IAuthInfoProps } from "src/components/authInfo/AuthInfo";
import { UserList } from "src/components/userList/UserList";
import { IInputUser, IUser } from "src/models/user.interface";
import { useUserAddition, useUsers } from "src/services/User";
import styles from "./Home.view.module.css";

export interface IHomeViewProps {
  authInfoProps: IAuthInfoProps
}

export const HomeView = (props: IHomeViewProps) => {

  const [users, setUsers] = useState([] as IUser[]);
  const {data: retrievedUsers, error: userError} = useUsers();
  const {execute: addUser} = useUserAddition(props.authInfoProps.accessToken);

  const onUserAdd = async (newRecords: IInputUser[]) => {

    const result = await addUser(newRecords);

    if (result) {
      setUsers([
        ...users,
        ...result,
      ])
    }
  };

  useEffect(() => {

    if (userError) {
      console.error(userError);
    } else if (retrievedUsers && users.length <= 0) {
      // if the data have already been loaded, don't override the new data (e.g. after add)
      setUsers(retrievedUsers);
    }

  }, [retrievedUsers]);

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