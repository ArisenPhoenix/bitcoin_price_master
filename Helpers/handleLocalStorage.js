import { AWS_GET, AWS_PUT } from "./FETCH/FETCH";

export const SAVE_TO_LOCAL_STORAGE = async (gameState, option, email) => {
  const data = JSON.stringify(gameState);
  let oldData = RETREIVE_FROM_LOCAL_STORAGE();
  console.log("oldData 1: ", oldData);
  oldData = oldData ? oldData : await AWS_GET();
  console.log("oldData 2: ", oldData);

  // console.log("GETTING OLD DATA FROM LOCAL STORAGE...");
  const storageLocation = email ? `${email}gameState` : "gameState";
  console.log("SAVING TO LOCAL STORAGE");
  localStorage.setItem(storageLocation, data);
  console.log("saved To localStorage");

  if (oldData.score !== gameState.score) {
    console.log("SAVING TO AWS");
    const success = await AWS_PUT(gameState);
    console.log("SAVE TO AWS RESPONSE: ", success);
    console.log("SAVE DONE");
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
