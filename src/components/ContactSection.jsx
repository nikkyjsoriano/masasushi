import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import Logo from "./assets/logo.svg";
import TopCarousel from "./TopCarousel";
import AboutSection from "./AboutSection";
import MenuSection from "./MenuSection";
import ContactSection from "./ContactSection";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden", // Prevent horizontal scrolling
        scrollBehavior: "smooth",
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
        <Toolbar
          sx={{
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            width: "100%", // Ensure the toolbar spans the full width
            boxSizing: "border-box", // Include padding and border in the element's total width and height
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ height: 80, marginRight: 16, padding: "10px" }}
          />
          <Box sx={{ display: "flex", gap: 2, marginLeft: "auto" }}>
            <Button
              sx={{
                backgroundColor: "#8D242C",
                color: "white",
                "&:hover": {
                  backgroundColor: "#C6535C",
                },
              }}
              href="#about"
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
              href="#menu"
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
              href="#contact"
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <TopCarousel />
      <AboutSection />
      <MenuSection />
      <ContactSection />
    </Box>
  );
}

export default App;
