import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  Table: {
    minWidth: 1100,
    tableLayout: "fixed",
    width: "100%",
    height: "100%",
  },
  TableHead: {
    backgroundColor: theme.palette.primary.main,
    height: 80,
  },
  TableHeading: {
    color: theme.palette.primary.contrastText,
    fontWeight: "bold",
  },
  TableFooter: {
    backgroundColor: theme.palette.secondary.light,
  },
}));
