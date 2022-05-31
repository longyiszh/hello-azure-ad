import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { ChangeEvent, MouseEvent, useState } from "react";
import { IInputUser } from "src/models/user.interface";

import styles from "./AddUser.module.css";

export interface IAddUserProps {
  onUserAdd: (newRecords: IInputUser[]) => void
}

export const AddUser = (props: IAddUserProps) => {

  const emptyUser: IInputUser = {
    name: "",
    description: ""
  };

  const [newUser, setNewUser] = useState({...emptyUser});

  const onInputChange = (e: ChangeEvent) => {
    const inputBar = e.target as HTMLInputElement;
    const newValue = inputBar.value;
    const inputName = inputBar.name;

    setNewUser({
      ...newUser,
      [inputName]: newValue
    });

  };

  const onSubmitClick = (e: MouseEvent) => {
    e.preventDefault();
    props.onUserAdd([newUser]);
    setNewUser({...emptyUser});
  };

  return (
    <section className="AddUser">
      <h2 className="sectionTitle">Add a new User</h2>
      <UnauthenticatedTemplate>
        <p>Please sign in to add user.</p>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <section className="actions">
          <form>
            <div className={styles.inputs}>
              <label className={styles.inputLabel}>
                Name
                <input type="text" name="name" maxLength={32} value={newUser.name} onChange={onInputChange} />
              </label>
              <label className={styles.inputLabel}>
                Description
                <input type="text" name="description" maxLength={144} value={newUser.description} onChange={onInputChange} />
              </label>
              <div className={styles.actions}>
                <button className={styles.button} type="submit" onClick={onSubmitClick}>Submit</button>
              </div>
            </div>
          </form>
        </section>
      </AuthenticatedTemplate>

    </section>
  );
};