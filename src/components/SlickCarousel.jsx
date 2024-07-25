import React from "react";
import Slider from "react-slick";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import images from './assets/samples'
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

console.log(images);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SushiCarousel = () => (
  <div style={{ width: "100%" }}>
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
  </div>
);

export default SushiCarousel;
