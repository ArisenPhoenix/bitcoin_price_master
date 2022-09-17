import { AWS_GET, AWS_PUT } from "./FETCH/FETCH";

export const SAVE_TO_LOCAL_STORAGE = async (gameState) => {
  const data = JSON.stringify(gameState);
  const email = gameState.UserEmail;
  let oldData = RETREIVE_FROM_LOCAL_STORAGE();
  oldData = oldData ? oldData : await AWS_GET(email);
  const storageLocation = email ? `${email}gameState` : "gameState";
  localStorage.setItem(storageLocation, data);
  if (oldData.score !== gameState.score) {
    const success = await AWS_PUT(gameState);
    return "prices are different";
  }
  return "prices are the same";
};

export const RETREIVE_FROM_LOCAL_STORAGE = (userAuthData) => {
  let storageLocation;
  if (userAuthData) {
    const email = userAuthData.email;
    storageLocation = email ? `${email}gameState` : "gameState";
    try {
      const storedData = localStorage.getItem(storageLocation);
      const userGameData = JSON.parse(storedData);
      return userGameData;
    } catch (err) {
      console.log(err);
      return null;
    }
  } else {
    return "Not Logged In but should be hmmmmm....";
  }
};

export const RemoveFromStorage = () => {
  // Not Yet Used
  try {
    localStorage.removeItem("gameState");
  } catch {
    console.log("removed from local storage");
  }
};
