import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  FormControlLabel,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useToggleTheme } from "../../context/Context";

// Styles

const useStyles = makeStyles((theme) => ({
  Container: {
    height: 60,
  },
  LogoBox: {
    flexGrow: 1,
    display: "flex",
    alignItems: "start",
  },
  Logo: {
    fontWeight: "bold",
    marginLeft: 50,
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
      marginLeft: 5,
    },
  },
  Button1: {
    marginRight: 40,
    fontSize: 17,

    [theme.breakpoints.down("md")]: {
      marginRight: 10,
      fontSize: 12,
    },
  },
  Button2: {
    marginRight: 50,
    fontSize: 17,
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
}));

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
