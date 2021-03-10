import { combineReducers } from "redux";
import authReducer from "./authReducer";
import notificationReducer from "./notificationReducer";

const reducers = combineReducers({
  authentication: authReducer,
  notifications: notificationReducer
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return reducers(state, action);
};
export default rootReducer;
