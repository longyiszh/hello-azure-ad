import { MouseEvent } from "react";
import { useMsal } from "@azure/msal-react"
import { loginRequest } from "src/configs/auth";
import styles from "./SignInButton.module.css";

export interface ISignInButtonProps {
  mode: "LOGIN" | "LOGOUT"
}

export const SignInButton = (props: ISignInButtonProps) => {
  const { instance } = useMsal();

  const onSignInButtonClick = async (e: MouseEvent) => {

    try {
      await instance.loginPopup(loginRequest);
    } catch (error) {
      console.error(error);
    }

  };

  const onSignOutButtonClick = async (e: MouseEvent) => {

    try {
      await instance.logoutPopup();
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <>
      {props.mode === "LOGIN"?<button className={styles.button} onClick={onSignInButtonClick}>Sign In</button>: null}
      {props.mode === "LOGOUT"?<button className={styles.button} onClick={onSignOutButtonClick}>Sign out</button>: null}
    </>

  );
}