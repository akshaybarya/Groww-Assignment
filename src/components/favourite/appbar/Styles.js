import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  Container: {
    marginBottom: 25,
    height: "inherit",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  LogoBox: {
    flexGrow: 1,
    display: "flex",
    alignItems: "start",
  },
  SortBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  Icon: {
    marginLeft: 20,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
  Text: {
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
    },
  },
}));
