import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />

      <h1>ADVANTURE AVAITS</h1>
      <ButtonGroup>
        <Button variant="outline-light" style={{ marginRight: 10 }}>
          GET STARTED
        </Button>

        <Button variant="light">WATCH TRAILER</Button>
      </ButtonGroup>
    </div>
  );
};

export default HeroSection;
