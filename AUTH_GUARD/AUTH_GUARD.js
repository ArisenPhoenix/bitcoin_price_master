import { createContext, useContext, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/dist/frontend/use-user";
import { useRouter } from "next/router";
import User from "../Helpers/user_object";
import LoadingScreen from "../Components/UI/LoadingScreen/LoadingScreen";

export const AUTH_CONTEXT = createContext({
  isLoggedIn: Boolean,
  isLoading: Boolean,
  userData: User,
});

export const AUTH_CONTEXT_PROVIDER = (props) => {
  const { user, error, isLoading } = useUser();
  const [userGameData, setUserGameData] = useState({});
  // const router = useRouter();
  if (error) {
    console.log("ERROR SIGNING IN: ", error);
  } else if (user) {
  }
  const isLoggedIn = user && !isLoading;

  const authContext = {
    userData: { ...userGameData },
    isLoggedIn: isLoggedIn,
    isLoading: isLoading,
    setGameData: setUserGameData,
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
  const authCtx = useContext(AUTH_CONTEXT);
  // console.log(authCtx);

  if (error) {
    console.log("AUTH ERROR: ", error);
  }
  if (!user) {
    if (isLoading) {
      return <LoadingScreen />;
    }
    if (!isLoading) {
      return router.push("/");
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
