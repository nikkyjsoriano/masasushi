import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LineVector from "../assets/lines-vector.svg";

const AboutSection = () => (
  <Box
    id="about"
    sx={{
      width: "90%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: 4,
      textAlign: "center",
    }}
  >
    {/* New Reservation and Hours Section */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 4,
      }}
    >
      {/* Reservations Column */}
      <Box sx={{ textAlign: "center", marginRight: 5 }}>
        <Button variant="contained" className="actionButton">
          Make a Reservation
        </Button>
      </Box>
      {/* Hours Column */}
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

    <Typography
      variant="h4"
      className="sectionHeader"
      gutterBottom
      textAlign="center"
    >
      About Us
    </Typography>
    <Box
      component="img"
      src={LineVector}
      alt="Line Vector"
      sx={{
        width: "150px",
        height: "auto",
        margin: "0 auto",
        display: "block",
        marginBottom: 3,
      }}
    />
    <Typography variant="body1" className="aboutText">
      Welcome to [Restaurant Name], your ultimate destination for an exquisite
      all-you-can-eat sushi experience. Nestled in the heart of
      [City/Neighborhood], our restaurant is dedicated to bringing you the
      freshest and most delicious sushi in a warm and inviting atmosphere.
    </Typography>
    <Typography variant="body1" className="aboutText">
      At [Restaurant Name], we believe that sushi is more than just food; it's
      an art form. Our talented chefs use only the finest ingredients,
      meticulously sourced to ensure each bite is a perfect harmony of flavors
      and textures. From classic rolls to innovative creations, our extensive
      menu offers something for every palate.
    </Typography>
    <Typography variant="body1" className="aboutText">
      Our all-you-can-eat concept allows you to indulge in an unlimited
      selection of your favorite sushi rolls, nigiri, sashimi, and more. Whether
      you're a sushi aficionado or a newcomer to the sushi scene, we promise an
      exceptional dining experience that will leave you craving more.
    </Typography>
  </Box>
);

export default AboutSection;
