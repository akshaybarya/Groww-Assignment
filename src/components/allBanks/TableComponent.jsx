import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { IconButton, TableCell, TableRow } from "@material-ui/core";
import { Link, Navigate } from "react-router-dom";
import { StarRounded, StarBorderRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import {
  alterFavourite,
  fetchFavourite,
  setBankData,
} from "../../utils/localStorageFunctions";

const useStyles = makeStyles((theme) => ({
  tableHead: {
    height: 60,
  },
}));

const TableComponent = ({ data }) => {
  const temp = data;
  const { ifsc, address, bank_id, branch, bank_name } = temp;
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(true);

  // Checking weather Bank is Already Favourite
  useEffect(() => {
    const favouriteList = fetchFavourite();
    if (
      favouriteList.find(function (element) {
        return element.ifsc === ifsc;
      })
    ) {
      setFavourite(true);
    }
  }, []);

  // Setting the Details of Current Component
  const onClick = () => {
    setBankData(data);
    setRedirect(true);
  };

  // Adding Favourite
  const alterFavourites = (e) => {
    if (favourite) {
      alterFavourite("remove", data);
    } else {
      alterFavourite("add", data);
    }

    setFavourite(!favourite);
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
        <IconButton onClick={alterFavourites}>
          {favourite ? <StarRounded color="primary" /> : <StarBorderRounded />}
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

TableComponent.proptype = {
  data: PropTypes.object.isRequired,
};

export default TableComponent;
