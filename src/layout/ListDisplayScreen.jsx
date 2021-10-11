import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { centralContext } from "../contexts/CentralContextProvider";
import DisplayCard from "../components/DisplayCard";

export default function ListDisplayScreen() {
  const { fetchingAllAssets, data } = useContext(centralContext);
  useEffect(() => {
    fetchingAllAssets();
  }, []);
  if (data.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
      <Grid container spacing={2} sx={{marginTop:'5px'}}>
        {data.map((asset) => (
          <Grid key={asset.id} item xs={3}>
            <DisplayCard asset={asset}/>
          </Grid>
        ))}
      </Grid>
  );
}
