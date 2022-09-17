import css from "./PriceVsPrice.module.css";
import Operator from "./Operator";

const PriceVsPrice = (props) => {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <h3 className={css.headingText}>You Chose</h3>
      </div>
      <table className={css.table}>
        <tbody>
          <tr>
            <td className={css.left}>
              <h3 className={css.text}>Current Price</h3>
            </td>
            <td className={css.right}>
              <h3 className={css.text}>{props.nextPrice}</h3>
            </td>
          </tr>
          <tr className={css.operatorTd}>
            <td colSpan="2" className={css.operatorTd}>
              {/* <h1 className={`${css.operator}`}>
                {props.selection && props.selection !== "false"
                  ? props.selection
                  : ""}
              </h1> */}
              <Operator operatorObj={props.selection} contains="selection" />
            </td>
          </tr>

          <tr>
            <td className={css.left}>
              <h3 className={css.text}>Previous Price </h3>
            </td>

            <td className={css.right}>
              <h3 className={css.text}>{props.prevPrice}</h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PriceVsPrice;
