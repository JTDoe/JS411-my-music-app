import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  const { quality, setQuality } = props;

  const handleChange = (event) => {
    setQuality(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quality}
          label="Quality"
          onChange={handleChange}
        >
          <MenuItem value={10}>Low</MenuItem>
          <MenuItem value={20}>Medium</MenuItem>
          <MenuItem value={30}>High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
