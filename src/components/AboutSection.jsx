import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LineVector from "../assets/lines-vector.svg";

const AboutSection = () => (
  <Box id="about" className="textSection">
    <Box className="reservationHoursBox">
      <Button
        variant="contained"
        className="button actionButton reservationButton"
      >
        Make a Reservation
      </Button>
      <Box className="hoursBox">
        <Typography className="hoursText" sx={{ textAlign: "left" }}>
          Our Hours:
        </Typography>
        <Typography className="hoursText">MON: 11:00AM-9:30PM</Typography>
        <Typography className="hoursText">TUE: 11:00AM-9:30PM</Typography>
        <Typography className="hoursText">WED: 11:00AM-9:30PM</Typography>
        <Typography className="hoursText">THU: 11:00AM-9:30PM</Typography>
        <Typography className="hoursText">FRI: 11:00AM-9:30PM</Typography>
        <Typography className="hoursText">SAT: 11:00AM-9:30PM</Typography>
        <Typography className="hoursText">SUN: 11:00AM-9:30PM</Typography>
      </Box>
    </Box>

    <Typography gutterBottom textAlign="center" className="sectionHeader">
      About Us
    </Typography>
    <Box
      component="img"
      src={LineVector}
      alt="Line Vector"
      className="linesVector"
    />
    <Typography className="aboutText">
      Welcome to [Restaurant Name], your ultimate destination for an exquisite
      all-you-can-eat sushi experience. Nestled in the heart of
      [City/Neighborhood], our restaurant is dedicated to bringing you the
      freshest and most delicious sushi in a warm and inviting atmosphere.
    </Typography>
    <Typography className="aboutText">
      At [Restaurant Name], we believe that sushi is more than just food; it's
      an art form. Our talented chefs use only the finest ingredients,
      meticulously sourced to ensure each bite is a perfect harmony of flavors
      and textures. From classic rolls to innovative creations, our extensive
      menu offers something for every palate.
    </Typography>
    <Typography className="aboutText">
      Our all-you-can-eat concept allows you to indulge in an unlimited
      selection of your favorite sushi rolls, nigiri, sashimi, and more. Whether
      you're a sushi aficionado or a newcomer to the sushi scene, we promise an
      exceptional dining experience that will leave you craving more.
    </Typography>
  </Box>
);

export default AboutSection;
