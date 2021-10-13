import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom";
import { centralContext } from "../contexts/CentralContextProvider";
import ConfirmationModal from "./ConfirmationModal";

export default function DisplayCard(props) {
  const { asset } = props;
  const history = useHistory();
  const { deleteAsset } = useContext(centralContext);
  const [displayButtons, setDisplayButtons] = useState(false);
  const [open, setOpen] = React.useState(false);

  const goToAssetInfoDisplay = (id) => {
    history.push(`/asset/${id}`);
  };
  const goToEditScreen = (id) => {
    history.push(`/asset/edit/${id}`);
  };
  const deleteHandler = () => {
    deleteAsset(asset.id);
  };
  return (
    <>
      <Card>
        <CardActionArea
          onMouseEnter={() => setDisplayButtons(true)}
          onMouseLeave={() => setDisplayButtons(false)}
        >
          <CardMedia
            component="img"
            height="140"
            image={asset.imageURL}
            alt="asset-image"
            onClick={() => goToAssetInfoDisplay(asset.id)}
          />
          <CardContent style={{ padding: "5px", marginBottom: "10px" }}>
            <Grid
              container
              alignItems="center"
              justifyContent="flex-start"
              sx={{ height: "40px" }}
            >
              <Grid item xs={8}>
                <Typography variant="body2" color="text.primary">
                  {asset.title}
                </Typography>
              </Grid>
              {displayButtons && (
                <>
                  <Grid item xs={2}>
                    <Button
                      size="small"
                      onClick={() => goToEditScreen(asset.id)}
                    >
                      <EditIcon fontSize="small" color="secondary" />
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Button size="small">
                      <DeleteIcon
                        onClick={() => setOpen(true)}
                        fontSize="small"
                        color="primary"
                      />
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
      <ConfirmationModal
        open={open}
        setOpen={setOpen}
        agreeFunction={deleteHandler}
      />
    </>
  );
}
