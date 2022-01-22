import React from "react";

import {
  Box,
  Container,
  FormControl,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";

const cities = ["Mumbai", "Delhi", "Chennai", "Pune", "Jaipur"];

const categories = [
  { name: "Bank", value: "bank_name" },
  { name: "Ifsc", value: "ifsc" },
  { name: "Branch", value: "branch" },
  { name: "Bank ID", value: "bank_id" },
  { name: "Address", value: "address" },
];

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

  InnerComponent1: {
    marginleft: 0,
    marginRight: 20,
    width: 250,
    padding: 0,
  },
  InnerComponent2: {
    marginleft: 20,
    marginRight: 20,
    width: 150,
  },
  InnerComponent3: {
    marginleft: 20,
    marginRight: 0,
    width: 150,
  },
}));

// Rendering The Function

const Appbar = ({ search, setSearch, type, setType, city, setCity }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.Container}>
      <Toolbar disableGutters>
        <Box className={classes.LogoBox}>
          <Typography variant="h4" component="h2">
            ALL BANKS
          </Typography>
        </Box>

        <Box>
          <TextField
            variant="outlined"
            label="Filter Search"
            size="medium"
            className={classes.InnerComponent1}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <FormControl
            variant="outlined"
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

          <FormControl
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
