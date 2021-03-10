import {
  LOGOUT,
  LOGIN_SUCCESS,
  AUTH_LOADING,
  AUTH_LOGGED_USER,
  SHOW_NOTIFICATION
} from "./types";
import { authentication, users } from "../../api";

export function login(values) {
  return async function (dispatch) {
    dispatch({
      type: AUTH_LOADING,
      payload: true
    });
    try {
      const { data } = await authentication.getAuthentication(values);
      const auth = { token: data.accessToken, email: values.email };
      localStorage.setItem("auth", JSON.stringify(auth));
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch ({ error, response }) {
      // timeout added to delay api call - and showcase loader
      setTimeout(() => {
        dispatch({
          type: AUTH_LOADING,
          payload: false
        });
        dispatch({ type: SHOW_NOTIFICATION, payload: response.data });
      }, 2000);
    }
  };
}

export const getLoggedUser = (email) => async (dispatch) => {
  const { data } = await users.getUser(email);

  dispatch({
    type: AUTH_LOGGED_USER,
    payload: data[0]
  });
};

export const logOut = () => async (dispatch) => {
  dispatch({
    type: LOGOUT
  });

  localStorage.clear();
};
