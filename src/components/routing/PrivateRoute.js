import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLoggedUser } from "../../state/actions/authActions";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => ({
    isAuthenticated: state.authentication.isAuthenticated
  }));

  useEffect(() => {
    if (isAuthenticated) {
      const auth = JSON.parse(localStorage.getItem("auth"));
      dispatch(getLoggedUser(auth.email));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
