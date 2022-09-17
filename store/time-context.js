import { createContext, useState } from "react";

// Time Limit Made for testing so you don't have to wait a minute each time you go through the debugging.
const timeLimit = process.env.TIME_LIMIT ? Number(process.env.TIME_LIMIT) : 60;
// const timeLimit = 3;

const TimeContext = createContext({
  timeLeft: timeLimit,
  currentTime: timeLimit,
  setTimeLeft: () => {},
  setCurrentTime: () => {},
  areButtonsLocked: Boolean,
  setButtonsLocked: () => {},
  isCounting: Boolean,
});

export default TimeContext;

export const TimeContextProvider = (props) => {
  const [currentTime, setCurrentTime] = useState(timeLimit);
  const [buttonsLocked, setButtonsLocked] = useState(false);
  const [waitingForNewPrice, setWaitingForPrice] = useState(false);
  // const [timeLeft, setTimeLeft] = useState(timeLimit);
  const toggleButtons = () => {
    buttonsLocked ? setButtonsLocked(false) : setButtonsLocked(true);
  };

  const reset = () => {
    setButtonsLocked(false);
    setCurrentTime(timeLimit);
    setWaitingForPrice(true);
  };

  const interval = () => {
    const timer = setTimeout(() => {
      setCurrentTime((prev) => {
        return prev > 0 ? prev - 1 : timeLimit;
      });
    }, 1000);
    return timer;
  };

  const contexValue = {
    timeLeft: timeLimit,
    // setTimeLeft: setTimeLeft,
    currentTime: currentTime,
    areButtonsLocked: buttonsLocked,
    waiting: waitingForNewPrice,
    setWaiting: setWaitingForPrice,
    setCurrentTime: setCurrentTime,
    setButtonsLocked: setButtonsLocked,
    toggleButtons: toggleButtons,
    reset: reset,
    interval: interval,
  };

  return (
    <TimeContext.Provider value={contexValue}>
      {props.children}
    </TimeContext.Provider>
  );
};
