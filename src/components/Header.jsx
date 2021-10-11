import React from "react";
import { Grid, AppBar, Toolbar, Typography, Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
  return (
    <Grid container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Asset Management
          </Typography>
          <AccountCircleIcon fontSize='large'/>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
