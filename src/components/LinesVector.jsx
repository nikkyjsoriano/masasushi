import React from "react";
import { Box } from "@mui/material";
import LineVector from "../assets/lines-vector.svg";

const AboutSection = () => (
  <Box
    component="img"
    src={LineVector}
    alt="Line Vector"
    className="linesVector"
  />
);

export default AboutSection;
