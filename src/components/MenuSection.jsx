import React from "react";
import { Box, Typography } from "@mui/material";
import LineVector from "./assets/lines-vector.svg";
import MenuCarousel from "./components/MenuCarousel";

const MenuSection = () => (
  <Box
    id="menu"
    sx={{
      width: "70%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: 4,
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontFamily: '"Julee", cursive',
        marginBottom: 3,
      }}
      gutterBottom
      textAlign="center"
    >
      Our Menu
    </Typography>
    <Box
      component="img"
      src={LineVector}
      alt="Line Vector"
      sx={{
        width: "100px",
        height: "auto",
        margin: "0 auto",
        display: "block",
        marginBottom: 3,
      }}
    />
    <MenuCarousel />
  </Box>
);

export default MenuSection;
