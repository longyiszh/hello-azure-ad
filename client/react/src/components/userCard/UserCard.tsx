import styles from "./UserCard.module.css";

export const UserCard = () => {
  return (
    <article className={styles.UserCard}>
      <header className={styles.header}>
        <small>ID: 123123123-123123</small>
      </header>
      <main>
        <h3 className={styles.username}>User Name</h3>
        <div className="userDescription">
          Description. Description, Description. Description, Description? Description!
        </div>
      </main>
    </article>
  );
};