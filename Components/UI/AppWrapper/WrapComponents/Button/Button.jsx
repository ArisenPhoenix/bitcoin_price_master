import Link from "../../../Link/Link";
import css from "./Button.module.css";

const Button = (props) => {
  let classes;
  let type_;
  if (props.type === "main") {
    classes = `main navbar-text`;

    type_ = (
      <span
        className={classes}
        onClick={props.onClick}
        name={props.name}
        id={props.id}
      >
        <Link
          className={classes}
          href={props.href}
          text={props.text}
          name={props.name}
          id={props.id}
        />
      </span>
    );
  } else if (props.type === "link") {
    classes = `${props.className} dropdown-item`;

    type_ = (
      <button
        name={props.name}
        id={props.id}
        data-rr-ui-dropdown-item
        className={classes}
        onClick={props.onClick ? props.onClick : null}
      >
        <Link
          href={props.href}
          text={props.text}
          onClick={props.onClick}
          name={props.name}
          id={props.id}
        />
      </button>
    );
  } else if (props.type === "action") {
    classes = `${props.className} ${css.unbootstrapped}`;
    type_ = (
      <button
        onClick={props.onClick ? props.onClick : null}
        className={classes}
        name={props.name}
        id={props.id}
        disabled={props.locked}
      >
        {props.href ? (
          <a href={props.href ? props.href : null}>{props.text}</a>
        ) : (
          <h1 className={css.styleText}>{props.text}</h1>
        )}
      </button>
    );
  } else if (props.type === "dropDown") {
    classes = `${props.className} ${css.unbootstrapped} dropdown-item`;
    type_ = (
      <button
        className={classes}
        name={props.name}
        id={props.id}
        disabled={props.locked}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = props.href;
        }}
      >
        {props.text}
      </button>
    );
  }

  return type_;
};

export default Button;
