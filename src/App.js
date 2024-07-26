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

import TopCarousel from "./components/TopCarousel";
import AboutSection from "./components/AboutSection";
import MenuSection from "./components/MenuSection";
import ContactSection from "./components/ContactSection";

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
