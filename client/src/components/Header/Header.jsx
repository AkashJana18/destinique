import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "./Header.css";
import { getMenuStyles } from "../../utils/common.js";
import useHeaderColor from "../../hooks/useHeaderColor";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { MantineProvider } from "@mantine/core";


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor;
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        <Link to="/">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/properties">Hotels</NavLink>
            <NavLink to="/addbusiness">Add Business</NavLink>
            <a href="mailto:akashjana663@gmail.com">Contact</a>

            {/* Login button */}
            {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <MantineProvider>
                <ProfileMenu user={user} logout={logout} />
              </MantineProvider>
            )}
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
