import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LineVector from "../assets/lines-vector.svg";

const AboutSection = () => (
  <Box
    id="about"
    sx={{
      width: "70%",
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
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#8D242C",
            color: "white",
            fontSize: "1.25rem", // Larger text
            padding: "10px 30px", // Add padding around the text
            textTransform: "none", // Ensure text is not in all caps
            "&:hover": {
              backgroundColor: "#C6535C",
            },
          }}
        >
          Make a Reservation
        </Button>
      </Box>
      {/* Hours Column */}
      <Box
        sx={{
          textAlign: "left",
          backgroundColor: "#8D242C",
          color: "white",
          padding: 2,
          borderRadius: 1,
          width: "auto", // Adjust width to fit the text content
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "left" }}>
          Our Hours:
        </Typography>
        <Typography variant="body1">MON: 11:00AM-9:30PM</Typography>
        <Typography variant="body1">TUE: 11:00AM-9:30PM</Typography>
        <Typography variant="body1">WED: 11:00AM-9:30PM</Typography>
        <Typography variant="body1">THU: 11:00AM-9:30PM</Typography>
        <Typography variant="body1">FRI: 11:00AM-9:30PM</Typography>
        <Typography variant="body1">SAT: 11:00AM-9:30PM</Typography>
        <Typography variant="body1">SUN: 11:00AM-9:30PM</Typography>
      </Box>
    </Box>

    <Typography
      variant="h4"
      sx={{
        fontFamily: '"Julee", cursive',
        marginBottom: 0,
      }}
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
    <Typography
      variant="body1"
      sx={{
        fontSize: "1.25rem",
        lineHeight: 1.8,
        marginBottom: 2,
      }}
    >
      Welcome to [Restaurant Name], your ultimate destination for an exquisite
      all-you-can-eat sushi experience. Nestled in the heart of
      [City/Neighborhood], our restaurant is dedicated to bringing you the
      freshest and most delicious sushi in a warm and inviting atmosphere.
    </Typography>
    <Typography
      variant="body1"
      sx={{
        fontSize: "1.25rem",
        lineHeight: 1.8,
        marginBottom: 2,
      }}
    >
      At [Restaurant Name], we believe that sushi is more than just food; it's
      an art form. Our talented chefs use only the finest ingredients,
      meticulously sourced to ensure each bite is a perfect harmony of flavors
      and textures. From classic rolls to innovative creations, our extensive
      menu offers something for every palate.
    </Typography>
    <Typography
      variant="body1"
      sx={{
        fontSize: "1.25rem",
        lineHeight: 1.8,
      }}
    >
      Our all-you-can-eat concept allows you to indulge in an unlimited
      selection of your favorite sushi rolls, nigiri, sashimi, and more. Whether
      you're a sushi aficionado or a newcomer to the sushi scene, we promise an
      exceptional dining experience that will leave you craving more.
    </Typography>
  </Box>
);

export default AboutSection;
