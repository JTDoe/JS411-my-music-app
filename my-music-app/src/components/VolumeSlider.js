import React, { useState, useEffect, Component } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";


export default function ContinuousSlider(props) {
  const { volume, setVolume } = props;

  const handleSlide = (event) => {
    volume(event.target.value);
  }
  return (
    <Box sx={{ width: 250 }}>
      <Slider
        aria-label="Small steps"
        defaultValue={10}
        step={10}
        marks={true}
        min={0}
        max={100}
        onChange={handleSlide}
      />
    </Box>
  );
}
