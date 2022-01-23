import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Drawer,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./Style";

const DrawerComponent = ({ theme, handleChangeDense }) => {
  const classes = useStyles();

  return (
    <>
      <List>
        <Link to="/all-banks" className="Link">
          <ListItem button>
            <ListItemText>ALL BANKS</ListItemText>
          </ListItem>
        </Link>
        <Link to="/favourites" className="Link">
          <ListItem button>
            <ListItemText>FAVOURITES</ListItemText>
          </ListItem>
        </Link>
        <ListItem button onClick={handleChangeDense}>
          <ListItemText>{theme ? "LIGHT THEME" : "DARK THEME"}</ListItemText>
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              color="default"
              checked={theme}
              onChange={handleChangeDense}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </>
  );
};

DrawerComponent.propTypes = {};

export default DrawerComponent;
