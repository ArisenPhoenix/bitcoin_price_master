import css from "./Message.module.css";
import Operator from "./Operator";

const Message = (props) => {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <tbody>
          <tr className={css.centered}>
            <td colSpan="3">
              <h3 className={css.message}>
                {props.winLoseMessage && props.winLoseMessage.message
                  ? `${props.winLoseMessage.message}!`
                  : null}
              </h3>
            </td>
          </tr>
          <tr className={css.centered}>
            <td>
              <h3 className={css.message}>{props.nextPrice}</h3>
            </td>
            <td className={css.operatorTd}>
              <Operator
                operatorObj={props.winLoseMessage}
                contains="operator"
              />
            </td>
            <td>
              <h3 className={css.message}>{props.prevPrice}</h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Message;
