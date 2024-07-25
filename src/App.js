import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
} from "@mui/material";
import Logo from "./assets/logo.svg"; // Import the logo
import LineVector from "./assets/lines-vector.svg"; // Import the SVG

import SlickCarousel from "./components/SlickCarousel"; // Import the carousel component
import MenuCarousel from "./components/MenuCarousel"; // Import the carousel component

// Top Carousel Section
const TopCarousel = () => (
  <Box sx={{ width: "100%" }}>
    <SlickCarousel /> {/* Carousel before the About section */}
  </Box>
);

// About Section
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
        marginBottom: 3, // Add padding to the bottom of the header item
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
        marginBottom: 3, // Add padding to the bottom of the image
      }}
    />
    <Typography
      variant="body1"
      sx={{
        fontSize: "1.25rem", // Increase font size
        lineHeight: 1.8, // Increase line height for spacing
        marginBottom: 2, // Add margin between paragraphs
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
        fontSize: "1.25rem", // Increase font size
        lineHeight: 1.8, // Increase line height for spacing
        marginBottom: 2, // Add margin between paragraphs
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
        fontSize: "1.25rem", // Increase font size
        lineHeight: 1.8, // Increase line height for spacing
      }}
    >
      Our all-you-can-eat concept allows you to indulge in an unlimited
      selection of your favorite sushi rolls, nigiri, sashimi, and more. Whether
      you're a sushi aficionado or a newcomer to the sushi scene, we promise an
      exceptional dining experience that will leave you craving more.
    </Typography>
  </Box>
);

// Menu Section with Carousel
const MenuSection = () => (
  <Box
    id="menu"
    sx={{
      width: "70%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: 4,
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontFamily: '"Julee", cursive',
        marginBottom: 3, // Add padding to the bottom of the header item
      }}
      gutterBottom
      textAlign="center"
    >
      Our Menu
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
        marginBottom: 3, // Add padding to the bottom of the image
      }}
    />
    <MenuCarousel /> {/* Carousel for the menu */}
  </Box>
);

// Contact Section with Two-Column Layout for Form and Map
const ContactSection = () => (
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
          <TextField label="Email" type="email" variant="outlined" fullWidth />
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

function App() {
  return (
    <Box sx={{ width: "100%", overflow: "auto", scrollBehavior: "smooth" }}>
      <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
        <Toolbar
          sx={{
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Space for the logo */}
          <img
            src={Logo}
            alt="Logo"
            style={{ height: 80, marginRight: 16, padding: "10px" }} // Add padding around the logo
          />
          {/* Navigation Buttons */}
          <Box sx={{ display: "flex", gap: 2, marginLeft: "auto" }}>
            <Button
              sx={{
                backgroundColor: "#8D242C",
                color: "white",
                "&:hover": {
                  backgroundColor: "#C6535C",
                },
              }}
              href="#about" // Link to About section
            >
              About
            </Button>
            <Button
              sx={{
                backgroundColor: "#8D242C",
                color: "white",
                "&:hover": {
                  backgroundColor: "#C6535C",
                },
              }}
              href="#menu" // Link to Menu section
            >
              Menu
            </Button>
            <Button
              sx={{
                backgroundColor: "#8D242C",
                color: "white",
                "&:hover": {
                  backgroundColor: "#C6535C",
                },
              }}
              href="#contact" // Link to Contact section
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Top Carousel */}
      <TopCarousel />

      {/* Main Content Sections */}
      <AboutSection />
      <MenuSection />
      <ContactSection />
    </Box>
  );
}

export default App;
