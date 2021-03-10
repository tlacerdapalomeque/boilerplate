import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  LoadIndicator: {
    display: "flex",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#ffffff"
  }
}));

function Loader({ isLoading }) {
  const classes = styles();
  if (isLoading) {
    return (
      <div className={classes.LoadIndicator}>
        <CircularProgress size={30} color="inherit" />
      </div>
    );
  } else {
    return null;
  }
}
export default Loader;
