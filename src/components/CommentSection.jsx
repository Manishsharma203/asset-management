import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function CommentSection(props) {
  const { comments } = props;
  console.log("comments", comments);
  if (comments === undefined) {
    return <h3>No Comments</h3>;
  }
  return (
    <Grid
      container
      direction="column"
      sx={{ width: "70%", margin: "auto", marginTop: "10px" }}
    >
      {comments.map((commentInfo) => (
        <Grid item>
          <Grid container>
            <Grid item xs={12}>
              <Grid display="flex" alignItems="center">
                {/* <img
                src={commentInfo.avatar}
                alt="avatar"
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            /> */}
                <AccountCircleIcon fontSize="small" />
                <Typography variant="overline" sx={{ marginLeft: "5px" }}>
                  {commentInfo.name}
                </Typography>
                <Typography variant="caption" sx={{ marginLeft: "5px" }}>
                  {new Date(commentInfo.dateModified).toDateString()}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">{commentInfo.comment}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
      <Box sx={{ display: "flex", flexDirection: "column", marginY: "5px" }}>
        <TextField type="text" placeholder="post your comment" />
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ marginLeft: "auto", marginY: "5px" }}
        >
          Post Comment
        </Button>
      </Box>
    </Grid>
  );
}
