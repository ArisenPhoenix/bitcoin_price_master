import css from "./Buttons.module.css";
import Button from "../UI/AppWrapper/WrapComponents/Button/Button";

const Buttons = (props) => {
  return (
    <div className={css.buttonDiv}>
      <div className={css.secondaryDiv}>
        <Button
          className={css.higher}
          type="action"
          text="Higher"
          onClick={props.onClickHigher}
          locked={props.locked}
        />
      </div>

      <div className={css.secondaryDiv}>
        <Button
          className={css.lower}
          type="action"
          text="Lower"
          onClick={props.onClickLower}
          locked={props.locked}
        />
      </div>
    </div>
  );
};

export default Buttons;
