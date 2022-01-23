import React from "react";
import PropTypes from "prop-types";
import { Box, Container, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./Styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

// Rendering The Function

const Appbar = ({ sortValue, setSortValue }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.Container}>
      <Box className={classes.LogoBox}>
        <Typography variant="h5" component="h2">
          FAVOURITES
        </Typography>
      </Box>
      <Box>
        <Box className={classes.SortBox}>
          <Typography variant="h6" className={classes.Text}>
            Sort: {!sortValue ? "Oldest" : "Newest"}
          </Typography>
          <IconButton onClick={setSortValue} className={classes.Icon}>
            {sortValue ? (
              <ArrowUpwardIcon size="large" color="inherit" fontSize="large" />
            ) : (
              <ArrowDownwardIcon
                size="large"
                color="inherit"
                fontSize="large"
              />
            )}
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

Appbar.propTypes = {
  sortValue: PropTypes.bool.isRequired,
  setSortValue: PropTypes.func.isRequired,
};

export default Appbar;
