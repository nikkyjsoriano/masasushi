import React from "react";
import LineVector from "../assets/lines-vector.svg";
import {
  Box,
  Paper,
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
      <Box sx={{ position: "relative", display: "inline-block" }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Julee", cursive',
            marginBottom: 3, // Add padding to the bottom of the header item
            position: "relative",
            zIndex: 1,
          }}
          gutterBottom
        >
          Contact
        </Typography>
        <Box
          component="img"
          src={LineVector}
          alt="Line Vector"
          sx={{
            width: "100px",
            height: "auto",
            display: "block",
            margin: "0 auto",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </Box>

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
            <TextField label="Name" variant="outlined" fullWidth />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
            />
            <TextField label="Subject" variant="outlined" fullWidth />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
            />

            <FormControlLabel
              control={<Checkbox />}
              label="I want to receive news and updates"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Apply to Masa Sushi"
            />

            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#8D242C",
                color: "white",
                "&:hover": {
                  backgroundColor: "#C6535C",
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Box>

        {/* Find Us Column */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6">Find Us</Typography>
          <Paper sx={{ height: 300, width: "100%", marginTop: 2 }}>
            {/* Placeholder for map box */}
            <Box
              sx={{
                height: "100%",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2">Map placeholder</Typography>
            </Box>
          </Paper>
          <Box sx={{ marginTop: 4 }}>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              Masa Sushi 415 Nassau Park Blvd, Princeton, NJ 08540, USA
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              Phone: 609-520-8883
            </Typography>
            <Typography variant="body1">
              Email: masa8restaurant@hotmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactSection;
