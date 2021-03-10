import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import Notification from "./components/notifications/Notification";
import Public from "./pages/Public";

import {
  StylesProvider,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

// definition of Material UI theme that will be applied to all the app.
// If values are not redefined then it will fall back to default theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0460a9"
    },
    secondary: {
      main: "#fcaf18"
    }
  },
  typography: {
    fontFamily: "Roboto, Arial, Helvetica, sans-serif",
    h1: {
      fontSize: "6.857rem",
      lineHeight: "8rem"
    },
    h2: {
      fontSize: "4.286rem",
      lineHeight: "5.143rem"
    },
    h3: {
      fontSize: "3.429rem",

      lineHeight: "4rem"
    },
    h4: {
      fontSize: "2.429rem",

      lineHeight: "2.571rem"
    },
    h5: {
      fontSize: "1.714rem",
      lineHeight: "1.714rem"
    },
    h6: {
      fontSize: "1.429rem",
      lineHeight: "1.714rem"
    }
  }
});

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/public" component={Public} />
            <PrivateRoute path="/" component={Layout} />
          </Switch>
          <Notification></Notification>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
