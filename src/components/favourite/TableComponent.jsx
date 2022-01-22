import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { IconButton, TableCell, TableRow } from "@material-ui/core";
import { Link, Navigate } from "react-router-dom";
import { Delete } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { alterFavourite, setBankData } from "../../utils/localStorageFunctions";

const useStyles = makeStyles((theme) => ({
  tableHead: {
    height: 60,
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  },
}));

const TableComponent = ({ data, functions: { bankData, setbankData } }) => {
  const temp = data;
  const { ifsc, address, bank_id, branch, bank_name } = temp;
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(true);

  // Redirecting To Respected Bank Page
  const onClick = (e) => {
    setBankData(data);
    setRedirect(true);
  };

  // Icon Toggle
  const toggleFunction = () => {
    setToggle(!toggle);
  };

  // Adding Favourite
  const alterFavourites = (e) => {
    const data = bankData.filter((data) => data.ifsc !== ifsc);

    alterFavourite("remove", { ifsc, address, bank_id, branch, bank_name });

    setbankData(data);

    setShouldRedirect(false);
  };

  // Redirecting Logic
  if (redirect && shouldRedirect) {
    return <Navigate to={`/bank-details/${ifsc}`} />;
  }

  return (
    <TableRow key={ifsc} onClick={onClick} className={classes.tableHead}>
      <TableCell sx={{ minWidth: 500 }} align="center">
        <Link className="Link" to={`/bank-details/${ifsc}`}>
          {bank_name}
        </Link>
      </TableCell>
      <TableCell align="center">
        <Link className="Link" to={`/bank-details/${ifsc}`}>
          {ifsc}
        </Link>
      </TableCell>
      <TableCell align="center">
        <Link className="Link" to={`/bank-details/${ifsc}`}>
          {branch}
        </Link>
      </TableCell>
      <TableCell align="center">
        <Link className="Link" to={`/bank-details/${ifsc}`}>
          {bank_id}
        </Link>
      </TableCell>
      <TableCell>
        <Link className="Link" to={`/bank-details/${ifsc}`}>
          {address}
        </Link>
      </TableCell>
      <TableCell align="center" padding="checkbox">
        <IconButton
          onClick={alterFavourites}
          onMouseEnter={toggleFunction}
          onMouseLeave={toggleFunction}
        >
          {toggle ? <Delete color="error" /> : <Delete />}
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

TableComponent.proptype = {
  data: PropTypes.object.isRequired,
  functions: PropTypes.object.isRequired,
};

export default TableComponent;
