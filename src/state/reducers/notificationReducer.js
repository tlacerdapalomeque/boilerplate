import {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from "../actions/types";

const initialState = {
  isLoading: true,
  notification: {
    message: "",
    isOpen: false
  }
};

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false
      };

    case SHOW_NOTIFICATION:
      return {
        ...state,
        notification: {
          message: action.payload,
          isOpen: true
        }
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        notification: {
          isOpen: false
        }
      };

    default:
      return state;
  }
}
