import React from "react";

import {
  Box,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import { useStyles } from "./Styles";

const cities = ["Mumbai", "Delhi", "Chennai", "Pune", "Jaipur"];

const categories = [
  { name: "Bank", value: "bank_name" },
  { name: "Ifsc", value: "ifsc" },
  { name: "Branch", value: "branch" },
  { name: "Bank ID", value: "bank_id" },
  { name: "Address", value: "address" },
];

// Rendering The Function

const Appbar = ({ search, setSearch, type, setType, city, setCity }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.Container}>
      <Toolbar disableGutters className={classes.Toolbar}>
        <Box className={classes.LogoBox}>
          <Typography variant="h4" component="h2">
            ALL BANKS
          </Typography>
        </Box>

        <Box>
          <Grid container spacing={3}>
            <Grid item>
              <Box display="flex" alignItems="center" height="100%">
                <Typography variant="overline" color="textSecondary">
                  Filter &nbsp;
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <FilterListIcon
                    size="large"
                    color="inherit"
                    fontSize="large"
                  />
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <FormControl
                variant="outlined"
                color="secondary"
                className={classes.InnerComponent2}
                size="medium"
              >
                <Select
                  defaultValue="Bank"
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  {categories &&
                    categories.map((category) => {
                      return (
                        <MenuItem value={category.value} key={category.value}>
                          {category.name}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl
                color="secondary"
                variant="outlined"
                className={classes.InnerComponent3}
                style={{ marginRight: 0 }}
                size="medium"
              >
                <Select
                  defaultValue="Mumbai"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  {cities &&
                    cities.map((city) => {
                      return (
                        <MenuItem value={city} key={city}>
                          {city}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <TextField
                color="secondary"
                variant="outlined"
                label="Filter Search"
                size="medium"
                className={classes.InnerComponent1}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </Container>
  );
};

/*
Appbar.proptypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
};
*/
export default Appbar;
