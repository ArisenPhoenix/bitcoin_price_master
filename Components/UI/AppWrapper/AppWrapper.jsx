import Header from "./Header/Header";
import css from "./AppWrapper.module.css";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <div className={css.container}>
      <Header className={`${css.general} `} />
      <main className={css.main}>{props.children}</main>
      <Footer className={`${css.general}`} />
    </div>
  );
};

export default Layout;
