import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  TableHeadIncative: {
    height: 60,
    transition: "0.25s",
    backgroundColor: theme.palette.primary.dark,
    "&:hover": {
      cursor: "pointer",
      fontWeight: "bold",
    },
  },
  TableHeadActive: {
    height: 60,
    transition: "0.25s",
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.primary.dark,
    },
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:hover": {
      cursor: "pointer",
      fontWeight: "bold",
    },
  },
}));
