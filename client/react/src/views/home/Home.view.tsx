import axios from "axios";
import { useEffect, useState } from "react";
import { AddUser } from "src/components/addUser/AddUser";
import { AuthInfo, IAuthInfoProps } from "src/components/authInfo/AuthInfo";
import { UserList } from "src/components/userList/UserList";
import { IInputUser, IUser } from "src/models/user.interface";
import styles from "./Home.view.module.css";

export interface IHomeViewProps {
  authInfoProps: IAuthInfoProps
}

export const HomeView = (props: IHomeViewProps) => {

  const [users, setUsers] = useState([] as IUser[]);
  const [isLoaded, setIsLoaded] = useState(false);

  // load User records from server
  const getUsers = async () => {
    try {
      const { data } = await axios.get<IUser[]>(`${process.env.REACT_APP_API_GET_USER_URL}`);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const onUserAdd = (newRecords: IInputUser[]) => {
    console.log(`User added`, newRecords);
  };

  useEffect(() => {
    if (!isLoaded) {
      getUsers()
        .then((data) => {
          if (data) {
            setUsers(data);
          }
          setIsLoaded(true);
        });
    }
  });

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