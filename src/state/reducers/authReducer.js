import {
  LOGIN_SUCCESS,
  LOGOUT,
  AUTH_LOADING,
  AUTH_LOGGED_USER
} from "../actions/types";

const local = localStorage.getItem("auth");

const initialState = {
  isLoading: false,
  isAuthenticated: !!local,
  token: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: action.payload
      };

    case LOGOUT:
      localStorage.removeItem("auth");
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false
      };
    case AUTH_LOGGED_USER:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };
    default:
      return state;
  }
}
