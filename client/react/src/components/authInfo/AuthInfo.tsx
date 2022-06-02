import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import styles from "./AuthInfo.module.css";

export interface IAuthInfoProps {
  accessToken: string
}

export const AuthInfo = (props: IAuthInfoProps) => {
  return (
    <section className="AuthInfo">
      <h2 className="sectionTitle">Authentication Info</h2>
      <UnauthenticatedTemplate>
        <p>Your information will be shown here after your successful log-in.</p>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <p>Your access token</p>
        <section className={styles.authToken}>
          <code className={styles.code}>
            {props.accessToken}
          </code>
        </section>
      </AuthenticatedTemplate>
    </section>
  );
};