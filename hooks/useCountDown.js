import { useEffect, useContext } from "react";
import TimeContext from "../store/time-context";

const useCountDown = () => {
  const timeCtx = useContext(TimeContext);

  const currentTime = timeCtx.currentTime;
  const setTime = timeCtx.setCurrentTime;
  const isCountingDown = timeCtx.areButtonsLocked;
  const setCountingDown = timeCtx.setButtonsLocked;
  const intervalTimer = timeCtx.interval;
  const setWaiting = timeCtx.setWaiting;

  useEffect(() => {
    if (isCountingDown) {
      intervalTimer();
      if (currentTime === 0) {
        setCountingDown(false);
        setWaiting(true);
      }
    }
  }, [currentTime, isCountingDown, setTime]);
  return currentTime;
};

export default useCountDown;
