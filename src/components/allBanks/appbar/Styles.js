import { makeStyles } from "@material-ui/core";
// Styles
export const useStyles = makeStyles((theme) => ({
  Container: {
    marginBottom: 25,
    height: "inherit",
  },
  LogoBox: {
    flexGrow: 1,
    display: "flex",
    alignItems: "start",
  },

  Toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  InnerComponent1: {
    width: 250,
  },
  InnerComponent2: {
    width: 150,
  },
  InnerComponent3: {
    width: 150,
  },
}));
