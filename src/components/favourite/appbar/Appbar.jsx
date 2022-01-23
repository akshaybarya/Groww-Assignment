import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { useStyles } from "./Styles";

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
