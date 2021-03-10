import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "../components/routing/PrivateRoute";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/Home";
import User from "../pages/User";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(6)
  }
}));

function Layout() {
  const classes = useStyles();
  return (
    <>
      <Navbar></Navbar>
      <Container className={classes.container}>
        <Box mt={4}>
          <BrowserRouter>
            <Switch>
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute path="/user" component={User} />
            </Switch>
          </BrowserRouter>
        </Box>
      </Container>
    </>
  );
}

export default Layout;
