import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

export default function Home() {
  return (
    <>
      <Box mt={4}>
        <Typography variant="h6" align="center">
          {`URL: ${window.location.href}`}
        </Typography>
        <Typography variant="h6" align="center">
          Public Route
        </Typography>
      </Box>
    </>
  );
}
