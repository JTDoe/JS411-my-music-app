import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input(props) {
  return (
    <Box
      component="form"

    >
      <TextField
        margin="none"
        required
        id={props.id}
        label={props.label}
        type={props.type ? props.type : "text"}
        defaultValue={props.defaultValue}
        variant="standard"
      />
    </Box>
  );
}
