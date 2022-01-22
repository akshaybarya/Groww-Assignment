import React from "react";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";

// Styles

const useStyles = makeStyles((theme) => ({
  Container: {
    marginBottom: 25,
    height: "inherit",
  },
  LogoBox: {
    flexGrow: 1,
    display: "flex",
    alignItems: "start",
  },
}));

// Rendering The Function

const Appbar = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.Container}>
      <div>
        <Box className={classes.LogoBox}>
          <Typography variant="h4" component="h2">
            FAVOURITES
          </Typography>
        </Box>
      </div>
    </Container>
  );
};

export default Appbar;
