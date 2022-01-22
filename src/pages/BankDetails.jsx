import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Spinner from "../components/common/Spinner";
import { fetchBankData } from "../utils/localStorageFunctions";

// Creating Styles
const useStyles = makeStyles((theme) => ({
  Container: {
    marginTop: 80,
  },
  Table: {
    minWidth: 650,
    tableLayout: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.action.hover,
  },
  TableHead: {
    backgroundColor: "#00d09c",
  },
  TableHeading: {
    color: "#FFFF",
    fontWeight: "bold",
  },
  TableBodyCell: {
    borderBottom: "0",
    height: 75,
    paddingLeft: 150,
    paddingRight: 150,
    fontSize: 13,
    fontWeight: "bold",
  },
}));

const BankDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [loading, setloading] = useState(true);
  const [details, setDetails] = useState();
  const [redirect, setRedirect] = useState(false);

  //Fetching The Data
  useEffect(() => {
    const data = fetchBankData();

    if (!data || data.ifsc !== id) {
      setRedirect(true);
    }
    setDetails(data);
    setloading(false);
  }, [id]);

  // Redirecting The User
  if (!loading && redirect) {
    return <Navigate to="/all-banks" />;
  }
  // Showing The Spiiner While Loading
  if (loading) {
    return <Spinner />;
  }

  return (
    <Container className={classes.Container}>
      <TableContainer component={Paper}>
        <Table className={classes.Table}>
          <TableHead className={classes.TableHead}>
            <TableRow>
              <TableCell colSpan={2} align="center">
                <Typography
                  variant="body1"
                  component="h4"
                  color="inherit"
                  className={classes.TableHeading}
                >
                  {details.bank_name}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.TableBodyCell} align="left">
                IFCS
              </TableCell>
              <TableCell className={classes.TableBodyCell} align="right">
                {details.ifsc}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.TableBodyCell} align="left">
                BANK_ID
              </TableCell>
              <TableCell className={classes.TableBodyCell} align="right">
                {details.bank_id}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.TableBodyCell} align="left">
                BRANCH
              </TableCell>
              <TableCell className={classes.TableBodyCell} align="right">
                {details.branch}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.TableBodyCell} align="left">
                ADDRESS
              </TableCell>
              <TableCell className={classes.TableBodyCell} align="right">
                {details.address}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.TableBodyCell} align="left">
                CITY
              </TableCell>
              <TableCell className={classes.TableBodyCell} align="right">
                {details.city}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.TableBodyCell} align="left">
                DISTRICT
              </TableCell>
              <TableCell className={classes.TableBodyCell} align="right">
                {details.district}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.TableBodyCell} align="left">
                STATE
              </TableCell>
              <TableCell className={classes.TableBodyCell} align="right">
                {details.state}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default BankDetails;
