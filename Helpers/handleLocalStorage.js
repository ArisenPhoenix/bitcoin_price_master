import { AWS_GET, AWS_PUT } from "./FETCH/FETCH";

export const SAVE_TO_LOCAL_STORAGE = async (gameState, option, email) => {
  const data = JSON.stringify(gameState);
  let oldData = RETREIVE_FROM_LOCAL_STORAGE();
  oldData = oldData ? oldData : await AWS_GET();
  const storageLocation = email ? `${email}gameState` : "gameState";
  localStorage.setItem(storageLocation, data);
  if (oldData.score !== gameState.score) {
    const success = await AWS_PUT(gameState);
    return "prices are different";
  }
  return "prices are the same";
};

export const RETREIVE_FROM_LOCAL_STORAGE = (email) => {
  let userGameData;
  const storageLocation = email ? `${email}gameState` : "gameState";
  try {
    userGameData = localStorage.getItem(storageLocation);
    userGameData = JSON.parse(userGameData);
    return userGameData;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const RemoveFromStorage = () => {
  try {
    localStorage.removeItem("gameState");
  } catch {
    console.log("removed from local storage");
  }
};
