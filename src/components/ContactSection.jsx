import React from "react";
import LineVector from "../assets/lines-vector.svg";
import FindUs from "../assets/findus.png";
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
        width: "70%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: 4,
        textAlign: "center", // Center the title
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: '"Julee", cursive',
          marginBottom: 0,
        }}
        gutterBottom
        textAlign="center"
      >
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
            sx={{ display: "flex", flexDirection: "column", gap: 4 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  textAlign: "left",
                  fontFamily: '"Judson", serif',
                }}
              >
                Name
              </Typography>
              <TextField variant="outlined" fullWidth />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  textAlign: "left",
                  fontFamily: '"Judson", serif',
                }}
              >
                Email
              </Typography>
              <TextField variant="outlined" type="email" fullWidth />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  textAlign: "left",
                  fontFamily: '"Judson", serif',
                }}
              >
                Subject
              </Typography>
              <TextField variant="outlined" fullWidth />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  textAlign: "left",
                  fontFamily: '"Judson", serif',
                }}
              >
                Message
              </Typography>
              <TextField variant="outlined" multiline rows={4} fullWidth />
            </Box>

            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#8D242C",
                color: "white",
                width: "fit-content", // Adjust width to fit content
                "&:hover": {
                  backgroundColor: "#C6535C",
                },
                alignSelf: "flex-start", // Align to the left
                padding: "8px 16px", // Add padding around the button text
                marginTop: 2, // Space above the button
              }}
            >
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
          <Typography
            variant="h6"
            sx={{
              textAlign: "left",
              marginBottom: 1,
              fontFamily: '"Judson", serif',
              fontSize: "1rem",
            }}
          >
            Find Us
          </Typography>
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
              <Typography
                variant="body1"
                sx={{ fontFamily: '"Judson", serif' }}
              >
                Masa Sushi
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: '"Judson", serif' }}
              >
                415 Nassau Park Blvd, Princeton, NJ 08540, USA
              </Typography>
            </Box>

            <Box sx={{ flex: 1, padding: 1, textAlign: "left" }}>
              <Typography
                variant="body1"
                sx={{ fontFamily: '"Judson", serif', marginBottom: 1 }}
              >
                Phone: 609-520-8883
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: '"Judson", serif' }}
              >
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
