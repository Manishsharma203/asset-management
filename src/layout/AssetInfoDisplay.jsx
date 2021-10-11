import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { centralContext } from "../contexts/CentralContextProvider";
import { Box } from "@mui/system";
import { Button,Typography } from "@mui/material";
import AssetInfoCard from "../components/AssetInfoCard";
import CommentSection from "../components/CommentSection";
import { useHistory } from "react-router-dom";

export default function AssetInfoDisplay() {
  const params = useParams();
  const history= useHistory()
  const { fetchAssetById } = useContext(centralContext);
  const [assetData, setAssetData] = useState({});
  useEffect(() => {
    fetchAssetById(params.assetId)
      .then((info) => setAssetData(info))
      .catch((err) => console.log(err));
  }, []);
  const backToDashboard=()=>{
      history.push('/')
  }
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
          {assetData.title}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ flexGrow: "1" }}
          onClick={backToDashboard}
        >
          Back
        </Button>
      </Box>
      <AssetInfoCard assetData={assetData}/>
      <CommentSection comments={assetData.comments}/>
    </Box>
  );
}
