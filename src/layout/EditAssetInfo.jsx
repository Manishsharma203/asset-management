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
  const { fetchAssetById, data, setData,saveAsset } = useContext(centralContext);
  const [assetData, setAssetData] = useState({
    title: "",
    description: "",
    imageURL: "",
    uploadedBy: "",
  });
  useEffect(() => {
    fetchAssetById(params.assetId)
      .then((info) => setAssetData(info))
      .catch((err) => console.log(err));
  }, []);
  const backToDashboard = () => {
    history.push("/");
  };
  // const saveAsset = () => {
  //   console.log("saveAsset", assetData);
  //   if (assetData.title && assetData.imageURL) {
  //     const copyData = [...data];
  //     const result=copyData.map((ele) =>ele.id===params.assetId?{...ele,...assetData}:ele)
  //     console.log('result',result)
  //     setData(result);
  //   } else {
  //     alert("Title cannot be empty");
  //   }
  // };
  const uploadImage = () => {
    setAssetData((prev) => ({
      ...prev,
      imageURL: "https://source.unsplash.com/random/100x100",
    }));
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
          <EditForm assetData={assetData} setAssetData={setAssetData} />
        </Box>
        <Box sx={{ width: 10, flexGrow: 1 }}>
          <CardMedia
            component="img"
            height="90%"
            image={assetData.imageURL}
            alt="asset image"
          />
          <input
            accept="image/*"
            type="file"
            id="image"
            name="imageURL"
            onChange={uploadImage}
          />
        </Box>
      </Card>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "center", padding: "5px" }}
      >
        <Button
          onClick={()=>saveAsset(params.assetId,assetData)}
          variant="contained"
          color="primary"
          size="small"
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}
