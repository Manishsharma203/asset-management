import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { centralContext } from "../contexts/CentralContextProvider";
import DisplayCard from "../components/DisplayCard";
import PopUp from "../components/PopUp";

export default function ListDisplayScreen() {
  const { fetchingAllAssets, data, popUpOpen, setPopUpOpen } =
    useContext(centralContext);
  useEffect(() => {
    if (data.length === 0) {
      fetchingAllAssets();
    }
  }, []);
  if (data.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <Grid container spacing={2} sx={{ marginTop: "5px" }}>
      {data
        .sort((a, b) => a.id - b.id)
        .map((asset) => (
          <Grid key={asset.id} item xs={3}>
            <DisplayCard asset={asset} />
          </Grid>
        ))}
      <PopUp open={popUpOpen} setOpen={setPopUpOpen} />
    </Grid>
  );
}
