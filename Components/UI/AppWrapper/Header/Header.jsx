import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import DropDown from "../DropDownNavigation/DropDown";
import css from "./Header.module.css";
import ButtonLink from "../WrapComponents/Button/Button";
import { useContext } from "react";
import NavigationContext from "../../../../store/navigation-context";
import { AUTH_CONTEXT } from "../../../../AUTH_GUARD/AUTH_GUARD";
import { useUser } from "@auth0/nextjs-auth0";

const Header = () => {
  const authCtx = useContext(AUTH_CONTEXT);
  const { user } = useUser();
  const navCtx = useContext(NavigationContext);

  const closeHeader = (event) => {
    event.stopPropagation();
    const dropEl = document.getElementById("basic-navbar-nav");
    const dropElClasses = dropEl.classList;

    let eventName = event.target.className;

    if (eventName.includes("main")) {
      eventName = "main";
    } else if (eventName.includes("navbar-toggler-icon")) {
      eventName = "toggler";
    }

    if (eventName === "main" || eventName === "toggler") {
      if (dropElClasses.contains("show")) {
        dropElClasses.add("hidden");
      }
    }
  };

  const in_ = <DropDown id="in" className={`in ${css.in}`} title="Profile" />;
  const out = (
    <DropDown id="out" className={`out ${css.out}`} title="Profile" />
  );

  return (
    <div className={css.height}>
      <Navbar expand="md" className={`${css.paddings} ${css.color}`}>
        <Navbar.Text className="myLogo">
          <Navbar.Brand>
            <ButtonLink
              type="main"
              href="/"
              text="Toggle"
              onClick={closeHeader}
              id="main"
            />
          </Navbar.Brand>
        </Navbar.Text>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={closeHeader} />

        <Navbar.Collapse
          justify="true"
          id="basic-navbar-nav"
          onClick={closeHeader}
        >
          <Nav fill="true" variant="tabs" justify="true">
            {user && (
              <Navbar.Text>
                <ButtonLink
                  type="main"
                  href={navCtx.home}
                  text="Play"
                  onClick={closeHeader}
                  id="main"
                />
              </Navbar.Text>
            )}
          </Nav>
          {in_}
        </Navbar.Collapse>
        {out}
      </Navbar>
    </div>
  );
};
export default Header;
