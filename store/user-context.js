import { createContext } from "react";
import { useUser } from "@auth0/nextjs-auth0/dist/frontend/use-user";

const UserContext = createContext({
  name: "",
  email: "",
  given_name: "",
  nickname: "",
  family_name: "",
});

export default UserContext;

export const UserContextProvider = (props) => {
  const { user, error, isLoading } = useUser();
  const contextValue = {
    email: user.email,
    givenName: user.given_name,
    familyName: user.family_name,
    userName: user.name,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
