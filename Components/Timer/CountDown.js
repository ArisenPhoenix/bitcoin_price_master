// import { useEffect, useState } from "react";

// const Timer = (props) => {
//   const [timer, setTimer] = useState(60);
//   const timerMinusOne = () => {
//     if (timer === 0) {
//       setTimer(60);
//       props.toggleButtons();
//     } else {
//       setTimer((prev) => {
//         return prev - 1;
//       });
//     }
//   };

//   useEffect(() => {
//     console.log(props.isCountingDown);
//     if (props.isCountingDown && timer === 60) {
//       timerMinusOne();
//     }
//   }, [props.isCountingDown]);

//   useEffect(() => {
//     let namedTimer;
//     if (timer === 0) {
//       props.toggleButtons();
//       setTimer(60);
//     } else if (timer > 0 && props.isCountingDown) {
//       namedTimer = setTimeout(() => {
//         timerMinusOne();
//       }, 1000);
//     }
//     if (timer === 0) {
//       return clearTimeout(namedTimer);
//     }
//   }, [timer]);

//   return <h1>Time Remaining: {timer}</h1>;
// };

// export default Timer;

import React from "react";
import { useCountdown } from "../../hooks/useCountDown";
import Timer from "./Timer";

// const Countdown = (timeToGo) => {
//   const timeLeft = useCountdown(timeToGo);
//   if (timeLeft === 0) {
//     return <Timer timeLeft={60} />;
//   } else {
//     return <Timer timeLeft={timeLeft} />;
//   }
// };

// export default Countdown;
