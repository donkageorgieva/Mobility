import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import SelectInput from "../SelectInput/SelectInput";
import { useSelector, useDispatch } from "react-redux";
import { routeActions } from "../../redux/slices/routeSlice";
import "./Nav.css";
const Nav = (props) => {
  const routes = useSelector((state) => state.routes.routes);
  const dispatch = useDispatch();
  const navLinks = props.links.map((btn) => (
    <li key={btn.text + btn.to}>
      <NavLink to={btn.to} className="navLink">
        {btn.text}
      </NavLink>
    </li>
  ));
  return (
    <Box>
      <AppBar
        position="static"
        component="nav"
        sx={{ padding: "0.2em 0em 0.2em 0em" }}
      >
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

          {navLinks}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
