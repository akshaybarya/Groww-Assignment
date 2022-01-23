import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Container,
  IconButton,
  Switch,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useToggleTheme } from "../../../context/Context";
import { useStyles } from "./Styles";
import DrawerComponent from "./drawer/DrawerComponent";

// Rendering The Function

const Navbar = () => {
  const classes = useStyles();
  const materialUITheme = useTheme();
  const isMobile = useMediaQuery(materialUITheme.breakpoints.down("md"));
  const [theme, setTheme] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const { toggleTheme, dark } = useToggleTheme();

  useEffect(() => {
    setTheme(dark);
  }, [dark]);

  const handleChangeDense = (e) => {
    toggleTheme();
    setTheme(!theme);
  };

  return (
    <AppBar position="static" className={classes.Container}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className={classes.LogoBox}>
            <Link to="/all-banks" className="Link">
              <Typography variant="h6" component="h3" className={classes.Logo}>
                GROWW ASSIGNMENT
              </Typography>
            </Link>
          </Box>
          {isMobile ? (
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Link to="/all-banks" className="Link">
                <Button
                  color="inherit"
                  className={classes.Button1}
                  size="small"
                >
                  All Banks
                </Button>
              </Link>
              <Link to="/favourites" className="Link">
                <Button
                  color="inherit"
                  className={classes.Button2}
                  size="small"
                >
                  Favourites
                </Button>
              </Link>

              <Typography
                variant="h6"
                component="h3"
                className={classes.ThemeButton}
              >
                {theme ? "LIGHT THEME " : "DARK THEME "}
                <Switch
                  edge="end"
                  color="default"
                  checked={theme}
                  onChange={handleChangeDense}
                  size="medium"
                />
              </Typography>
            </>
          )}
        </Toolbar>
        <Collapse in={openDrawer}>
          <DrawerComponent
            theme={theme}
            handleChangeDense={handleChangeDense}
          />
        </Collapse>
      </Container>
    </AppBar>
  );
};

export default Navbar;
