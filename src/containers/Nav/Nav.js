import React from "react";
import { Box, AppBar, Toolbar, Typography, Backdrop } from "@mui/material";
import { NavLink } from "react-router-dom";
import SelectInput from "../SelectInput/SelectInput";
import { useSelector, useDispatch } from "react-redux";
import { routeActions } from "../../redux/slices/routeSlice";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import "./Nav.css";
const Nav = (props) => {
  const [menu, setMenu] = useState({
    show: false,
    classes: ["menu"],
  });
  const routes = useSelector((state) => state.routes.routes);
  const dispatch = useDispatch();
  const handleMobileMenu = (action = { close: false, open: false }) => {
    if (!action.close || !action.open) {
      setMenu({
        show: !menu.show,
        classes: !menu.show ? ["menu show"] : ["menu"],
      });
    } else {
      setMenu({
        show: action.close ? false : true,
        classes: action.open ? ["menu show"] : ["menu"],
      });
    }
  };

  const navLinks = props.links.map((btn) => (
    <li
      key={btn.text + btn.to}
      className={menu.show ? "navLinks-group show" : "navLinks-group"}
      onClick={menu.show && handleMobileMenu.bind({ close: true, open: false })}
    >
      <NavLink to={btn.to} className="navLink">
        {btn.text}
      </NavLink>
    </li>
  ));

  return (
    <header component="header">
      <AppBar component="nav" position="fixed" sx={{ p: 1 }}>
        <Toolbar
          component="ul"
          sx={{
            gap: "1em",
            justifyContent: "space-between",
            margin: "0em",
          }}
        >
          <li style={{ flexGrow: 1 }}>
            <Typography variant="h6" component="h6" sx={{ padding: "0em" }}>
              {props.logo}
            </Typography>
          </li>
          <li style={{ flexGrow: 1 }}>
            <SelectInput
              color="secondary"
              options={routes.filter((route) => {
                return {
                  name: route.name,
                };
              })}
              label="Маршрут"
              onChange={(id) => {
                console.log(id);
                dispatch(
                  routeActions.displayRoute({
                    id,
                  })
                );
              }}
            />
          </li>
          {!menu.show && navLinks}
          <React.Fragment>
            <MobileMenu
              classes={menu.classes.join(" ")}
              closeMenu={handleMobileMenu}
              hide={!menu.show}
            >
              {menu.show && navLinks}
            </MobileMenu>
            {menu.show && (
              <Backdrop open={menu.show} onClick={handleMobileMenu} />
            )}
          </React.Fragment>

          <li className="menuIcon" onClick={handleMobileMenu}>
            <MenuIcon sx={{ width: "1.2em", height: "1.2em" }} />
          </li>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Nav;
