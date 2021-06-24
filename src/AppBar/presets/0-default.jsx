import * as React from "react";
import AppBar from "../AppBar";
import Toolbar from "../../Toolbar/Toolbar";
import IconButton from "../../IconButton/IconButton";
import Icon from "../../Icon/Icon";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";

export default (
  <AppBar position="static" uxpId="1" color="inherit">
    <Toolbar uxpId="2" justifyContent="space-between">
      <IconButton
        color="default"
        aria-label="Menu"
        uxpId="3"
      >
        <Icon uxpId="4">menu</Icon>
      </IconButton>
      <Typography variant="h6" color="primary" uxpId="5">
        Appbar
      </Typography>     
      <IconButton
        color="default"
        aria-label="Profile"
        size="large"
        uxpId="6"
      >
       <Icon uxpId="7">account_circle</Icon>
      </IconButton>      
    </Toolbar>
  </AppBar>
);
