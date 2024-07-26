import React from "react";
import { Box, Typography } from "@mui/material";
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
    <Typography
      variant="h4"
      sx={{
        fontFamily: '"Julee", cursive',
        marginBottom: 3,
      }}
      gutterBottom
    >
      About Us
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
