import React from "react";
import LineVector from "../assets/lines-vector.svg";
import FindUs from "../assets/findus.png";
import "../assets/styles/styles.css";

import {
  Box,
  Button,
  Checkbox,
  TextField,
  Typography,
  FormControlLabel,
} from "@mui/material";

function ContactSection() {
  return (
    <Box
      id="contact"
      sx={{
        width: "90%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: 4,
        textAlign: "center", // Center the title
      }}
    >
      <Typography className="sectionHeader" gutterBottom textAlign="center">
        Contact Us
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
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Contact Form Column */}
        <Box sx={{ flex: 1 }}>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography className="contactLabel">Name</Typography>
              <TextField fullWidth />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography className="contactLabel">Email</Typography>
              <TextField type="email" fullWidth />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography className="contactLabel">Subject</Typography>
              <TextField fullWidth />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography className="contactLabel">Message</Typography>
              <TextField multiline rows={4} fullWidth />
            </Box>

            <Button color="primary" className="formButton">
              Submit
            </Button>

            <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
              <FormControlLabel
                control={<Checkbox />}
                label="I want to receive news and updates"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Apply to Masa Sushi"
              />
            </Box>
          </Box>
        </Box>

        {/* Find Us Column */}
        <Box sx={{ flex: 1 }}>
          <Typography className="contactLabel">Find Us</Typography>
          <img
            src={FindUs}
            alt="Map"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
          {/* Address Details Box */}
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexDirection: { xs: "column", md: "row" },
              marginTop: 2, // Reduced margin
              padding: 1, // Reduced padding
              border: "1px solid #8D242C",
              borderRadius: 2,
              color: "white",
              backgroundColor: "#8D242C",
              maxWidth: "800px",
            }}
          >
            <Box sx={{ flex: 1, padding: 1, textAlign: "left" }}>
              <Typography className="contactText">Masa Sushi</Typography>
              <Typography className="contactText">
                415 Nassau Park Blvd, Princeton, NJ 08540, USA
              </Typography>
            </Box>

            <Box sx={{ flex: 1, padding: 1, textAlign: "left" }}>
              <Typography
                sx={{ fontFamily: '"Judson", serif', marginBottom: 1 }}
              >
                Phone: 609-520-8883
              </Typography>
              <Typography className="contactText">
                Email: masa8restaurant@hotmail.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactSection;
