import css from "./Time.module.css";
import { Fragment } from "react";

const Time = (props) => {
  let colorClass = css.white;
  const checkTime = Number(props.time);
  if (props.countingDown === true) {
    if (checkTime < 15) {
      colorClass = css.green;
      // color = "green";
    } else if (checkTime < 30) {
      // color = "yellow";
      colorClass = css.yellow;
    } else if (checkTime < 45) {
      // color = "orange";
      colorClass = css.orange;
    } else if (checkTime < 60) {
      // color = "orange";
      colorClass = css.red;
    }
  }
  return (
    <Fragment>
      <td>
        <h1 className={css.Text}>{props.text}</h1>
      </td>
      <td className={css.timeBox}>
        <h1 className={`${css.Time} ${colorClass}`}>{checkTime}</h1>
      </td>
    </Fragment>
  );
};

export default Time;
