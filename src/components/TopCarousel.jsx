import React from "react";
import Slider from "react-slick";
import { Button, Box } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const importAll = (r) => {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

// Import images
const images = importAll(
  require.context("../assets/samples", false, /\.(jpg|jpeg|png)$/)
);

const settings = {
  dots: true,
  speed: 500,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (dots) => (
    <Box
      sx={{
        position: "absolute",
        bottom: "35%", // Position dots 10% from the bottom of the carousel
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      {dots}
    </Box>
  ),
  customPaging: (i) => (
    <Box
      sx={{
        width: 20, // Size of each dot
        height: 20,
        borderRadius: "50%",
        backgroundColor: "white",
        border: "2px solid #8D242C",
        display: "inline-block",
        margin: "0 5px",
        "&:hover": {
          backgroundColor: "#C6535C",
        },
      }}
    />
  ),
};

const SushiCarousel = () => (
  <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
    <Button
      variant="contained"
      color="primary"
      className="button actionButton"
      sx={{
        position: "absolute",
        bottom: "50%",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 2,
      }}
      href="https://external-ordering-menu.com"
    >
      Order Online
    </Button>
    <Slider {...settings}>
      {Object.keys(images).map((key, index) => (
        <div key={index}>
          <img
            src={images[key]}
            alt={`Sushi ${index + 1}`}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </Slider>
  </Box>
);

export default SushiCarousel;
