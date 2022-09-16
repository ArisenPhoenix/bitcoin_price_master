import css from "./Score.module.css";
import { Fragment } from "react";

const Score = (props) => {
  return (
    <Fragment>
      <td className={css.left}>
        <h3 className={css.Text}>{props.text}</h3>
      </td>
      <td className={css.right}>
        <h3 className={css.Score}>{props.score}</h3>
      </td>
    </Fragment>
  );
};

export default Score;
