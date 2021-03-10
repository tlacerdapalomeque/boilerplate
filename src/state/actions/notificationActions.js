import {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from "./types";

export const showLoader = () => {
  return {
    type: SHOW_LOADER
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER
  };
};

export const showNotification = (message = "Something went wrong", state) => {
  return {
    type: SHOW_NOTIFICATION,
    payload: { message, state }
  };
};

export const hideNotification = () => {
  return {
    type: HIDE_NOTIFICATION
  };
};
