import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    if (window.scrollY > 100) {
      // Adjust the scroll position threshold as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <IconButton
      className={`backToTopButton ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="back to top"
    >
      <ArrowUpwardIcon />
    </IconButton>
  );
}

export default BackToTopButton;
