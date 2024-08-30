import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import {
  Box,
  List,
  AppBar,
  Button,
  Drawer,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
} from "@mui/material";

import ListIcon from "@mui/icons-material/List";

function HeaderNav() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  const menuItems = [
    { text: "About", href: "#about" },
    { text: "Menu", href: "#menu" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <AppBar className="appBar">
      <Toolbar className="toolBar">
        <img src={Logo} alt="Logo" className="logo" />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            marginLeft: "auto",
          }}
        >
          {menuItems.map((item) => (
            <Button
              key={item.text}
              className="button navButton"
              href={item.href}
            >
              {item.text}
            </Button>
          ))}
        </Box>
        <IconButton
          edge="start"
          aria-label="menu"
          sx={{
            color: "white",
            marginLeft: "auto",
            backgroundColor: "#8d242c",
            "&:hover": {
              backgroundColor: "#c6535c",
            },
            display: { xs: "flex", md: "none" },
          }}
          onClick={toggleDrawer(true)}
        >
          <ListIcon />
        </IconButton>
        <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {menuItems.map((item) => (
                <ListItem button key={item.text} component="a" href={item.href}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderNav;
