import { combineReducers } from "redux";

import homePage from "../state";

const rootReducer = combineReducers({
  homePage: () => homePage,
});
export default rootReducer;
