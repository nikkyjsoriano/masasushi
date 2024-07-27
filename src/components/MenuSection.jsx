import React from "react";
import MenuCarousel from "./MenuCarousel";
import { Box, Typography } from "@mui/material";
import LineVector from "../assets/lines-vector.svg";

const MenuSection = () => (
  <Box id="menu" className="menuContainer">
    <Typography gutterBottom textAlign="center" className="sectionHeader">
      Our Menu
    </Typography>
    <Box
      component="img"
      src={LineVector}
      alt="Line Vector"
      className="linesVector"
    />
    <MenuCarousel />
  </Box>
);

export default MenuSection;
