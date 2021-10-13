import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function PopUp(props) {
  const { open, setOpen } = props;
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          margin: "auto",
          background: "lightgreen",
          color: "white",
          padding: "10px",
          zIndex: 100,
          maxWidth: "content",
        }}
      >
        <Typography variant="h6" component="h2" textAlign="center">
          Update Successfull
        </Typography>
      </Box>
    </Modal>
  );
}
