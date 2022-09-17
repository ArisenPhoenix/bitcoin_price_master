import css from "./LoadingScreen.module.css";
// import { useState } from "react";
const LoadingScreen = (props) => {
  return (
    <div className={css.container}>
      <div className={css.loadingSpinner}></div>
    </div>
  );
};

export default LoadingScreen;
