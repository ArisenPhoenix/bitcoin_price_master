import css from "./TimeContainer.module.css";
// import { useState } from "react";
const TimeContainer = (props) => {
  return <h1 className={css.antiSpin}>{props.time}</h1>;
};

export default TimeContainer;
