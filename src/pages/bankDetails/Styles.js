import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  Container: {
    marginTop: 140,
  },
  Table: {
    minWidth: 650,
    tableLayout: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.dark,
  },
  TableHead: {
    backgroundColor: theme.palette.primary.main,
  },
  TableHeading: {
    color: theme.palette.primary.contrastText,
    fontWeight: "bold",
  },
  TableBodyCell: {
    borderBottom: "0",
    height: 55,
    paddingLeft: 170,
    paddingRight: 170,
    fontSize: 13,
    fontWeight: "bold",
  },
}));
