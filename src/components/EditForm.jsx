import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function EditForm(props) {
  const { assetData, setAssetData } = props;
  const [descriptionValue, setDescriptionValue] = useState("");
  useEffect(()=>{
    if(assetData.description){
      setDescriptionValue(assetData.description)
    }
  },[assetData.description])

  useEffect(()=>{
    setAssetData(prev=>({...prev,description:descriptionValue}))
  },[descriptionValue])

  const changeHandler = (event) => {
    // console.log("changeHandler", event.target.name, event.target.value);
    const name=event.target.name
    const value=event.target.value
    setAssetData(prev=>({...prev,[name]:value}))
  };
  return (
    <Box component="form" autoComplete="off">
      {assetData.id && (
        <>
          <TextField
            required
            fullWidth
            error={!assetData.title}
            id="outlined-required"
            label="Title"
            margin="normal"
            name="title"
            defaultValue={assetData.title}
            onChange={changeHandler}
          />
          <label style={{marginTop:'5px'}}>
            <em>Description</em>
          </label>
          <ReactQuill
            name="description"
            theme="snow"
            value={descriptionValue}
            onChange={setDescriptionValue}
          />
          <TextField
            fullWidth
            id="outlined-required"
            label="Uploaded by"
            margin="normal"
            name='uploadedBy'
            defaultValue={assetData.uploadedBy}
            onChange={changeHandler}
          />
        </>
      )}
    </Box>
  );
}
