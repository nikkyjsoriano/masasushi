import React from "react";
import MenuCarousel from "./MenuCarousel";
import { Box, Typography } from "@mui/material";
import LinesVector from "./LinesVector.jsx";

const MenuSection = () => (
  <Box id="menu" className="menuContainer">
    <Typography gutterBottom textAlign="center" className="sectionHeader">
      Our Menu
    </Typography>
    <LinesVector />
    <MenuCarousel />
  </Box>
);

export default MenuSection;
