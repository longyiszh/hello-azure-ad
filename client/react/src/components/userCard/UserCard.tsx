import styles from "./UserCard.module.css";

export interface IUserCardProps {
  id: string;
  name: string;
  description: string
}

export const UserCard = (props: IUserCardProps) => {
  return (
    <article className={styles.UserCard}>
      <header className={styles.header}>
        <small>{props.id}</small>
      </header>
      <main>
        <h3 className={styles.username}>{props.name}</h3>
        <div className="userDescription">
          {props.description}
        </div>
      </main>
    </article>
  );
};