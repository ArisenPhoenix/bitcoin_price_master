import { createContext } from "react";

const NavigationContext = createContext({
  linkify: () => {},
  landing: "/",
  login: "/login",
  logout: "/logout",
  signup: "/signup",
  home: "/home",
  dropDown: "dropDown",
  profile: "/profile",
});

export const NavigationContextProvider = (props) => {
  const contexValue = {
    landing: "/",
    login: "/login",
    logout: "/logout",
    signup: "/signup",
    home: "/home",
    dropDown: "Profile",
    profile: "/profile",
  };

  return (
    <NavigationContext.Provider value={contexValue}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
