import { AWS_PUT } from "./FETCH/FETCH";

export const SAVE_TO_LOCAL_STORAGE = (gameState, option, email) => {
  const data = JSON.stringify(gameState);
  const oldData = RETREIVE_FROM_LOCAL_STORAGE();
  localStorage.setItem(email ? email + "gameState" : "gameState", data);
  if (oldData.score !== gameState.score && option !== "init") {
    AWS_PUT(gameState);
  }
};

export const RETREIVE_FROM_LOCAL_STORAGE = (email) => {
  let userGameData;
  try {
    userGameData = localStorage.getItem(
      email ? email + "gameState" : "gameState"
    );
    userGameData = JSON.parse(userGameData);
  } catch (err) {
    console.log(err);
    return null;
  }
  return userGameData;
};

export const RemoveFromStorage = () => {
  try {
    localStorage.removeItem("gameState");
  } catch {
    console.log("removed from local storage");
  }
};
