import { useContext, useEffect, useState } from "react";
import PriceDisplay from "../Components/PriceDisplay/PriceDisplay";
import { TimeContextProvider } from "../store/time-context";
import AUTH_GUARD from "../AUTH_GUARD/AUTH_GUARD";
import { UserContextProvider } from "../store/user-context";
import { useUser } from "@auth0/nextjs-auth0";
import { RetreiveFromStorage } from "../Helpers/gameState";
import { retreiveUserData } from "../Components/PriceDisplay/handleData";

const BitcoinGame = () => {
  const { user, isLoading } = useUser();

  const [storage, setStorage] = useState({});

  useEffect(() => {
    const localData = RetreiveFromStorage();
    let email = user && user.email ? user.email : null;
    email = email ? email : localData.UserEmail;
    const userData = retreiveUserData("Init", email, setStorage);
    const s = userData.selction;
    if (!s || !s.selection || !s.text) {
      userData.selction = { selection: "", text: "" };
    }
    const gameData = userData ? userData : localData;
    setStorage(userData);
  }, [user]);

  const g = storage ? storage : {};

  // Persisting State
  // g is short for gamedata, didn't want to keep typing it out
  const startingState = {
    user: user,
    time: g.timeRemaining ? g.timeRemaining : 0,
    previousPrice: g.previousPrice ? g.previousPrice : { price: 0, time: 0 },
    currentPrice: g.currentPrice ? g.currentPrice : { price: 0, time: 0 },
    score: g.score ? g.score : 0,
    selection: g.selection
      ? { ...g.selction }
      : { selection: "false", text: "false" },
    message: g.message ? g.message : false,
    gameCommenced: g.gameCommenced ? g.gameCommenced : false,
  };

  console.log("Starting State: ", startingState);

  return (
    <AUTH_GUARD>
      <UserContextProvider />
      <TimeContextProvider>
        <PriceDisplay startingState={startingState} />
      </TimeContextProvider>
      <UserContextProvider />
    </AUTH_GUARD>
  );
};

export default BitcoinGame;
