import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Modal";

export default function ConfirmationModal(props) {
  const { open, setOpen,agreeFunction } = props;
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
          width: "250px",
          height: "150px",
          margin: "auto",
          marginTop: "20vh",
          background: "black",
          color:'white',
          padding:'10px'
        }}
      >
        <Typography variant="h6" component="h2" textAlign="center">
          Do You want to delete this asset
        </Typography>
        <Box sx={{ display: "flex", margin: "auto", justifyContent: "space-around" }}>
          <Button onClick={agreeFunction} variant="contained" color="primary" size="small">
            YES
          </Button>
          <Button onClick={()=>setOpen(false)} variant="contained" color="secondary" size="small">
            NO
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
