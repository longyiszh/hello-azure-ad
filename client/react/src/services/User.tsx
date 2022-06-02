import { IInputUser, IUser } from "src/models/user.interface";
import { useAxiosMutation, useAxiosQuery } from "./DataAccess";

export const useUsers = () => {

  process.env.REACT_APP_API_GET_USER_URL ||
    (() => {throw new Error("Missing endpoint for User")})();

  const {data, error, isLoading, isLoaded} = useAxiosQuery<IUser[]>(
    process.env.REACT_APP_API_GET_USER_URL
  );

  if (error) {
    console.error(error);
  }

  return {data, error, isLoading, isLoaded};

};

export const useUserAddition = (authToken?: string) => {

  process.env.REACT_APP_API_ADD_USER_URL ||
    (() => {throw new Error("Missing endpoint for adding User")})();

  return useAxiosMutation<IInputUser[], IUser[]>(
    process.env.REACT_APP_API_ADD_USER_URL,
    "POST",
    authToken
  );

};