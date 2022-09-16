import css from "./PriceDisplay.module.css";
import Card from "../UI/Card/Card";
import Buttons from "../Buttons/Buttons";
import NumberTable from "../TextDisplay/NumberTable";
import comparePrices from "./comparePrices";
import TimeContext from "../../store/time-context";
import useCountDown from "../../hooks/useCountDown";
import PriceVsPrice from "../TextDisplay/PriceVsPrice";
import Message from "../TextDisplay/Message";
import { useEffect, useState, useContext, Fragment } from "react";
import { get_current_price, get_next_price } from "./getPriceRequests";
import { useUser } from "@auth0/nextjs-auth0";
import { SaveToStorage } from "../../Helpers/gameState";

const PriceDisplay = (props) => {
  // Persisting State

  const g = props.startingState;
  const { user } = useUser();
  const timeCtx = useContext(TimeContext);
  const time = g.timeRemaining
    ? useCountDown(g.timeRemaining)
    : useCountDown(timeCtx.timeLimit);

  const [prevPrice, setPrevPrice] = useState(g.previousPrice);
  const [currentPrice, setCurrentPrice] = useState(g.currentPrice);
  const [score, setScore] = useState(g.score);
  const [selection, setSelection] = useState(g.selection);
  const [message, setMessage] = useState(g.message);
  const [gameCommenced, setGameCommenced] = useState(g.gameCommenced);
  const areButtonsLocked = g.areButtonsLocked
    ? g.areButtonsLocked
    : timeCtx.areButtonsLocked;
  const setAreButtonsLocked = timeCtx.setButtonsLocked;

  // console.log(currentPrice);

  useEffect(() => {
    setPrevPrice(g.previousPrice);
    setCurrentPrice(g.currentPrice);
    setScore(g.score);
    const newSelection = g.selection ? g.selection : selection;
    // setSelection(newSelection);
    setMessage(g.message);
    setGameCommenced(g.gameCommenced);
  }, [props]);

  const userState = {
    userName: user.name,
    UserEmail: user.email,
    score: score,
    timeRemaining: time,
    previousPrice: prevPrice,
    currentPrice: currentPrice,
    areButtonsLocked: areButtonsLocked,
    selection: selection,
    gameCommenced: gameCommenced,
    message: message,
  };

  useEffect(() => {
    // Initial Render and Setup of the game
    console.log("IN USE EFFECT INIT | CURRENT PRICE[0]: ", currentPrice.price);

    if (currentPrice.time !== 0 && prevPrice.time !== 0) {
      if (currentPrice.price === 0) {
        console.log(
          "getting current price........................................"
        );
        get_current_price(setCurrentPrice, "first useEffect get_current_price");
      }

      SaveToStorage(userState);
    }
  }, [currentPrice.time, prevPrice.time]);

  const afterPlayerWaits = async () => {
    // Game Logic After Timer Runs Out
    const newCurrentPrice = await get_next_price();
    const newPrevPrice = currentPrice;

    comparePrices(
      newCurrentPrice.price,
      newPrevPrice.price,
      selection.selection,
      scoreSetter,
      setMessage
    );

    setPrevPrice(currentPrice);
    setCurrentPrice(newCurrentPrice);
    setSelection((prev) => {
      return { ...prev, text: "false" };
    });
    timeCtx.setWaiting(false);
  };

  const scoreSetter = (subtract) => {
    // Updates The Score
    setScore((prev) => {
      if (subtract) {
        if (prev <= 0) {
          return 0;
        } else {
          return prev - 1;
        }
      } else {
        return prev + 1;
      }
    });
  };

  const toggleButtons = (boolean) => {
    // Well... Toggles the buttons to disabled or not
    areButtonsLocked ? setAreButtonsLocked(false) : setAreButtonsLocked(true);
  };

  const scoreHigher = () => {
    // If User Believes Price Will Be Higher
    setSelection({ text: ">", selection: ">" });
    toggleButtons(true);
  };

  const scoreLower = () => {
    // If User Believes Price Will Be Higher
    setSelection({ text: "<", selection: "<" });
    toggleButtons(true);
  };

  useEffect(() => {
    // Game Commenced Is Just An Extra Layer of Protection Against Unforseen Events
    if (!gameCommenced) {
      setGameCommenced(true);
    }
    if (
      time === timeCtx.timeLimit &&
      !areButtonsLocked &&
      gameCommenced &&
      timeCtx.waiting
    ) {
      afterPlayerWaits();
    }
  }, [areButtonsLocked, gameCommenced, time]);

  return (
    <Card className={css.displayCard}>
      <Card className={css.numberTableCard}>
        <NumberTable
          // All the top Parts of The game: All have numbers and go together, hence the name
          timeText="Time Remaining: "
          time={time}
          timeBool={areButtonsLocked}
          previousPriceText="Previous Price: "
          previousPrice={prevPrice.price ? prevPrice.price : 0}
          currentPriceText="Current Price: "
          currentPrice={currentPrice.price ? currentPrice.price : 0}
          scoreText="Score: "
          score={score}
        />
      </Card>

      <Buttons
        // Up Down Buttons
        onClickHigher={scoreHigher}
        onClickLower={scoreLower}
        locked={areButtonsLocked}
      />
      <Card>
        <Card className={`${css.center} ${css.resultsCard}`}>
          <h1 className={`${css.center} ${css.results}`}>Results</h1>
        </Card>

        <PriceVsPrice
          // Message Board At The Bottom
          selection={selection.selection}
          prevPrice={prevPrice.price ? prevPrice.price : 0}
          nextPrice={currentPrice.price ? currentPrice.price : 0}
        />
        <Message
          messageBool={areButtonsLocked}
          winLoseMessage={message}
          prevPrice={prevPrice.price ? prevPrice.price : 0}
          nextPrice={currentPrice.price ? currentPrice.price : 0}
        />
      </Card>
    </Card>
  );
};

export default PriceDisplay;
