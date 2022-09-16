import { Fragment } from "react";
import css from "./Price.module.css";

const Price = (props) => {
  return (
    <Fragment>
      <td className={css.left}>
        <h3 className={css.Text}>{props.text}</h3>
      </td>
      <td className={css.right}>
        <h3 className={css.Price}>{props.price}</h3>
      </td>
    </Fragment>
  );
};

export default Price;
