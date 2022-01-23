import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
