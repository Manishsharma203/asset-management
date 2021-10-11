import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { centralContext } from "../contexts/CentralContextProvider";
import { Box } from "@mui/system";
import { Button, Typography, Card, CardMedia } from "@mui/material";
import { useHistory } from "react-router-dom";
import EditForm from "../components/EditForm";

export default function EditAssetInfo() {
  const params = useParams();
  const history = useHistory();
  const { fetchAssetById } = useContext(centralContext);
  const [assetData, setAssetData] = useState({});
  useEffect(() => {
    fetchAssetById(params.assetId)
      .then((info) => setAssetData(info))
      .catch((err) => console.log(err));
  }, []);
  const backToDashboard = () => {
    history.push("/");
  };
  return (
    <Box sx={{ marginTop: "5px" }}>
      <Box
        sx={{
          borderBottom: "1px solid black",
          display: "flex",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <Typography variant="subtitle1" sx={{ flexGrow: "12" }}>
          Edit / {assetData.title}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ flexGrow: 1 }}
          onClick={backToDashboard}
        >
          Back
        </Button>
      </Box>
      <Card
        sx={{
          display: "flex",
          padding: "10px",
          justifyContent: "space-around",
          borderBottom: "1px solid black",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            padding: "20px",
          }}
        >
          <EditForm assetData={assetData} />
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 10, flexGrow: 1 }}
          image={assetData.imageURL}
          alt="asset image"
        />
      </Card>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "center", padding: "5px" }}
      >
        <Button variant="contained" color="primary" size="small">
          Save
        </Button>
      </Box>
    </Box>
  );
}
