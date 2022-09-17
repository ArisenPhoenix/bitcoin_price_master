import { increaseScore, decreaseScore } from "./scoreTickers";

const comparePrices = (
  currentPrice,
  previousPrice,
  selection,
  setScore,
  setMessage
) => {
  console.log("currentPrice: ", currentPrice, "previousPrice: ", previousPrice);
  const winMessage = { message: "You Won 1" };
  const loseMessage = { message: "You Lost" };
  const equalMessage = { message: "No Consequence", operator: "=" };
  let message;
  if (selection) {
    if (currentPrice === previousPrice) {
      setMessage(equalMessage);
    } else {
      if (currentPrice > previousPrice) {
        if (selection === ">") {
          winMessage.operator = ">";
          message = winMessage;
          increaseScore(setScore);
        } else {
          loseMessage.operator = ">";
          message = loseMessage;
          decreaseScore(setScore);
        }
      } else if (currentPrice < previousPrice) {
        if (selection === "<") {
          winMessage.operator = "<";
          message = winMessage;
          increaseScore(setScore);
        } else {
          loseMessage.operator = "<";
          // setMessage(loseMessage);
          message = loseMessage;
          decreaseScore(setScore);
        }
      }
      return setMessage(message);
    }
  }
};

export default comparePrices;
