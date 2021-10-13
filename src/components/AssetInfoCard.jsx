import React from "react";
import { Box } from "@mui/system";
import { Card, Typography, CardMedia } from "@mui/material";

export default function AssetInfoCard(props) {
  const { assetData } = props;
  return (
    <Card
      sx={{
        display: "flex",
        padding: "10px",
        justifyContent: "space-around",
        borderBottom: "1px solid black",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 10, flexGrow: 1 }}
        image={assetData.imageURL}
        alt="asset image"
      />
      <Box
        sx={{
          flexGrow: 2,
          padding: "20px",
        }}
      >
        <Typography>Description : {assetData.description}</Typography>
        <Typography>
          Updated On: {new Date(assetData.dateModified).toDateString()}
        </Typography>
      </Box>
    </Card>
  );
}
