import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  Link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  Icon: {
    color: "white",
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
