import { saveUserData } from "../Components/PriceDisplay/handleData";
import { AWS_PUT } from "./FETCH/FETCH";
// import { dataToItem } from "";
export const SaveToStorage = (gameState, option) => {
  const data = JSON.stringify(gameState);
  const oldData = RetreiveFromStorage();
  localStorage.setItem("gameState", data);
  if (oldData.score !== gameState.score && option !== "init") {
    AWS_PUT(gameState);
  }
};

export const RetreiveFromStorage = () => {
  let userGameData;
  try {
    userGameData = localStorage.getItem("gameState");
    userGameData = JSON.parse(userGameData);
  } catch (err) {
    console.log(err);
  }
  return userGameData;
};

export const RemoveFromStorage = () => {
  try {
    localStorage.removeItem("gameState");
  } catch {
    console.log();
  }
};
