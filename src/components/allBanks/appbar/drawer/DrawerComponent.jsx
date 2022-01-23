import {
  FormControl,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

const DrawerComponent = ({
  data: { city, setCity, cities, type, setType, categories, setSearch, search },
}) => {
  return (
    <>
      <List>
        <ListItem>
          <FormControl
            fullWidth
            color="secondary"
            variant="outlined"
            style={{ marginRight: 0 }}
            size="small"
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
        </ListItem>
        <ListItem>
          <FormControl
            fullWidth
            variant="outlined"
            color="secondary"
            size="small"
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
        </ListItem>
        <ListItem>
          <TextField
            fullWidth
            color="secondary"
            variant="outlined"
            label="Filter Search"
            size="small"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </ListItem>
      </List>
    </>
  );
};
DrawerComponent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DrawerComponent;
