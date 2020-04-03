import * as types from "../constants";
import { beginAction } from "./statusActions";

export const getInitialState = dispatch => {
  // dispatch(beginAction());
  return { type: types.SET_STATE_SUCCESS, data: "kako si" };
};
