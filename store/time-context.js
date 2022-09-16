import { createContext, useState } from "react";

// Time Limit Made for testing so you don't have to wait a minute each time you go through the debugging.
const timeLimit = 3;

const TimeContext = createContext({
  timeLimit: timeLimit,
  currentTime: timeLimit,
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
  const toggleButtons = () => {
    buttonsLocked ? setButtonsLocked(false) : setButtonsLocked(true);
  };

  const reset = () => {
    setButtonsLocked(false);
    setCurrentTime(timeLimit);
    setWaitingForPrice(true);
  };

  const interval = (currentTime) => {
    const timer = setTimeout(() => {
      setCurrentTime((prev) => {
        return prev > 0 ? prev - 1 : timeLimit;
      });
    }, 1000);
    return timer;
  };

  const contexValue = {
    timeLimit: timeLimit,
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
