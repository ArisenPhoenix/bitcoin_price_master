import css from "./NumberTable.module.css";
// import { Price, Score, Time } from "./TextDisplay";
import Price from "./Price";
import Score from "./Score";
import Time from "./Time";

const NumberTable = (props) => {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <tbody className={css.tbody}>
          <tr>
            <Price text={props.previousPriceText} price={props.previousPrice} />
          </tr>
          <tr>
            <Price text={props.currentPriceText} price={props.currentPrice} />
          </tr>
          <tr>
            <Score text={props.scoreText} score={props.score} />
          </tr>
          <tr>
            <Time
              text={props.timeText}
              time={props.time}
              countingDown={props.timeBool}
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NumberTable;
