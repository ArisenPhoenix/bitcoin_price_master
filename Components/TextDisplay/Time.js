import css from "./Time.module.css";
import { Fragment } from "react";

const Time = (props) => {
  let colorClass = css.white;
  const checkTime = Number(props.time);

  if (props.countingDown === true) {
    if (checkTime < 5) {
      colorClass = css.green;
    } else if (checkTime < 10) {
      colorClass = css.yellow;
    } else if (checkTime < 15) {
      colorClass = css.orange;
    } else if (checkTime < 20) {
      colorClass = css.red;
    }
  }
  return (
    <Fragment>
      <td>
        <h1 className={css.Text}>{props.text}</h1>
      </td>
      <td>
        <h1 className={`${css.Time} ${colorClass}`}>{props.time}</h1>
      </td>
    </Fragment>
  );
};

export default Time;
