import React from "react";
import Typography from "@material-ui/core/Typography";

export default function User() {
  return (
    <>
      <Typography variant="h6" align="center">
        {`URL: ${window.location.href}`}
      </Typography>
      <Typography variant="h6" align="center">
        User Route
      </Typography>
    </>
  );
}
