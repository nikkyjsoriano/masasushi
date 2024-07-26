import React from "react";
import "./assets/styles/styles.css";

import { AppBar, Toolbar, Button, Box } from "@mui/material";

import Logo from "./assets/logo.svg";
import TopCarousel from "./components/TopCarousel";
import MenuSection from "./components/MenuSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <Box sx={{ width: "100%", overflow: "auto", scrollBehavior: "smooth" }}>
      <AppBar
        position="relative"
        sx={{ backgroundColor: "transparent", zIndex: 10 }}
      >
        <Toolbar
          sx={{
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            height: 150,
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Space for the logo */}
          <img src={Logo} alt="Logo" className="logo" />
          {/* Navigation Buttons */}
          <Box sx={{ display: "flex", gap: 2, marginLeft: "auto" }}>
            <Button
              className="navButton"
              href="#about" // Link to About section
            >
              About
            </Button>
            <Button
              className="navButton"
              href="#menu" // Link to Menu section
            >
              Menu
            </Button>
            <Button
              className="navButton"
              href="#contact" // Link to Contact section
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Top Carousel */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <TopCarousel />
      </Box>

      {/* Main Content Sections */}
      <AboutSection />
      <MenuSection />
      <ContactSection />
    </Box>
  );
}

export default App;
