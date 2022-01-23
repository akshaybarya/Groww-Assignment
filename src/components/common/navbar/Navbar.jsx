import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  FormControlLabel,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useToggleTheme } from "../../../context/Context";
import { useStyles } from "./Styles";

// Rendering The Function

const Navbar = () => {
  const classes = useStyles();
  const [theme, setTheme] = useState(false);
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
          <Link to="/all-banks" className="Link">
            <Button color="inherit" className={classes.Button1} size="large">
              All Banks
            </Button>
          </Link>
          <Link to="/favourites" className="Link">
            <Button color="inherit" className={classes.Button2} size="large">
              Favourites
            </Button>
          </Link>

          <FormControlLabel
            color="default"
            control={
              <Switch
                color="default"
                checked={theme}
                onChange={handleChangeDense}
              />
            }
            label={theme ? "Light theme" : "Dark theme"}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
