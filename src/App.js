// import React from "react";
import "./assets/styles/styles.css";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import HeaderNav from "./components/HeaderNav";
import TopCarousel from "./components/TopCarousel";
import MenuSection from "./components/MenuSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import React, { useState, useEffect } from "react";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Change this value based on when you want to show the button
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box>
      <HeaderNav />
      <Box className="topCarouselBox">
        <TopCarousel />
      </Box>
      <AboutSection />
      <MenuSection />
      <ContactSection />

      <button
        onClick={scrollToTop}
        className={`backToTopButton ${showButton ? "showButton" : ""}`}
      >
        <ArrowUpwardIcon />
      </button>
    </Box>
  );
}

export default App;
