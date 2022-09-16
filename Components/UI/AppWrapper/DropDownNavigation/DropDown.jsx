import { useContext, Fragment } from "react";
import { Dropdown, DropdownButton, Navbar } from "react-bootstrap";
import Link from "../../Link/Link";
import css from "./DropDown.module.css";
import ButtonLink from "../WrapComponents/Button/Button";
import NavigationContext from "../../../../store/navigation-context";
import { AUTH_CONTEXT } from "../../../../AUTH_GUARD/AUTH_GUARD";

const DropDown = (props) => {
  const navCtx = useContext(NavigationContext);
  const authCtx = useContext(AUTH_CONTEXT);
  const classes = `${props.className} ${css.center}`;
  return (
    <Dropdown>
      <DropdownButton
        variant="nav-item"
        id="dropdown-menu-align-end"
        title={navCtx.dropDown}
        className={classes}
      >
        {!authCtx.isLoggedIn && (
          <Fragment>
            <Dropdown.Item>
              <ButtonLink
                type="dropDown"
                href="/api/auth/login"
                text="Login"
                id="main"
              />
            </Dropdown.Item>
          </Fragment>
        )}

        {authCtx.isLoggedIn && (
          <Fragment>
            <Dropdown.Item>
              <ButtonLink
                type="dropDown"
                href="/api/auth/logout"
                text="Logout"
                id="main"
              />
            </Dropdown.Item>
            <Dropdown.Item>
              <ButtonLink
                type="dropDown"
                href="/profile"
                text="Profile"
                id="main"
              />
            </Dropdown.Item>
          </Fragment>
        )}
      </DropdownButton>
      <Dropdown.Menu>
        <Link href="/login" text="Login" className={`${css.dropdownMenu}`} />

        <Link
          href="/settings"
          text="Settings"
          className={`${css.dropdownMenu}`}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
