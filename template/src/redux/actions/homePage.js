import * as types from "../constants";
import { beginAction } from "./statusActions";

export const getInitialState = dispatch => {
  return function (dispatch) {
    dispatch(beginAction());
    let data = { type: types.SET_STATE_SUCCESS, data: "kako si" };
    return setTimeout(() => dispatch(data), 1500);
  };
};
