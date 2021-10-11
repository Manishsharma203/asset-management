import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function EditForm() {
  return (
    <Box
      component="form"
      // noValidate
      autoComplete="off"
    >
      <TextField
        required
        fullWidth
        id="outlined-required"
        label="Title"
        margin="normal"
      />
      <TextField
        required
        fullWidth
        rows={4}
        id="outlined-required"
        label="Description"
        margin="normal"
      />
      <TextField
        required
        fullWidth
        id="outlined-required"
        label="Tags"
        margin="normal"
      />
    </Box>
  );
}
