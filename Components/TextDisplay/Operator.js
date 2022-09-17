import css from "./Operator.module.css";

const Operator = (props) => {
  let obj = props.operatorObj;
  const loc = props.contains;
  obj = obj && obj[loc] ? obj[loc] : "";
  return <h1 className={css.operatorTd}>{obj}</h1>;
};

export default Operator;
