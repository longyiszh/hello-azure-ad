import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

import styles from "./AddUser.module.css";

export const AddUser = () => {
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
                <input type="text" name="Name" maxLength={32} />
              </label>
              <label className={styles.inputLabel}>
                Description
                <input type="text" name="Description" maxLength={144} />
              </label>
              <div className={styles.actions}>
                <button className={styles.button} type="submit">Submit</button>
              </div>
            </div>
          </form>
        </section>
      </AuthenticatedTemplate>

    </section>
  );
};