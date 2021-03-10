import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";

export default function Home() {
  const { user } = useSelector((state) => state.authentication);

  return (
    <>
      <Typography variant="h6" align="center">
        {`URL: ${window.location.href}`}
      </Typography>
      <Typography variant="h6" align="center">
        {user && user.name}
      </Typography>
    </>
  );
}
