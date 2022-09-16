import useCountDown from "../../hooks/useCountDown";
import { useEffect, useContext } from "react";
import TimeContext from "../../store/time-context";

const Timer = (props) => {
  const timeCtx = useContext(TimeContext);
  const [timeLeft] = useCountDown({});
  const isCountingDown = timeCtx.areButtonsLocked;
  //   const reset = timeCtx.reset;

  useEffect(() => {}, [timeLeft]);
};

export default Timer;
