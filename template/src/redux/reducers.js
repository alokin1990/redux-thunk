import { combineReducers } from "redux";

import homePage from "./states/homePage";
import homePageReducer from "./reducer/reducers/homePage";

const rootReducer = combineReducers({
  homePage: homePageReducer
});
export default rootReducer;
