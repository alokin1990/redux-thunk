import { combineReducers } from "redux";

import homePage from "./homePage";

const rootReducer = combineReducers({
  homePage: () => homePage,
});
export default rootReducer;
