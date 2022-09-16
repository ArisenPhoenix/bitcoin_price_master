import css from "./Message.module.css";

const Message = (props) => {
  return (
    <table>
      <tbody>
        <tr colSpan="2" className={css.centered}>
          <td colSpan="2">
            <h3 className={css.message}>
              {props.winLoseMessage && props.winLoseMessage.message
                ? `${props.winLoseMessage.message}!`
                : null}
            </h3>
          </td>
        </tr>
        {/*  */}
        <tr colSpan="2" className={css.centered}>
          <td colSpan="2">
            <h3 className={css.message}>
              {props.nextPrice}
              {props.winLoseMessage && props.winLoseMessage.operator
                ? props.winLoseMessage.operator
                : null}
              {props.prevPrice}
            </h3>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Message;
