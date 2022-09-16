import { createContext } from "react";
import { useUser } from "@auth0/nextjs-auth0/dist/frontend/use-user";
import { useRouter } from "next/router";
import User from "../Helpers/user_object";

export const AUTH_CONTEXT = createContext({
  isLoggedIn: Boolean,
  isLoading: Boolean,
  userData: User,
});

export const AUTH_CONTEXT_PROVIDER = (props) => {
  const { user, error, isLoading } = useUser();
  const userData = { user };
  const isLoggedIn = user && !isLoading;
  const authContext = {
    userData: userData,
    isLoggedIn: isLoggedIn,
    isLoading: isLoading,
  };
  return (
    <AUTH_CONTEXT.Provider value={authContext}>
      {props.children}
    </AUTH_CONTEXT.Provider>
  );
};

const AUTH_GUARD = (props) => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (error) {
    console.log("AUTH ERROR: ", error);
  }
  if (!user) {
    if (isLoading) {
      return <h1>...Loading</h1>;
    }
    if (error) {
      console.log("auth Error: ", error);
    }
    router.push("/");
  } else {
    return props.children;
  }
};

export default AUTH_GUARD;
