import * as types from "../constants";
import { beginAction } from "./statusActions";

export const getInitialState = text => {
  return function (dispatch) {
    dispatch(beginAction());
    let data = { type: types.SET_STATE_SUCCESS, data: "kako si" + text };
    return setTimeout(() => dispatch(data), 1500);
  };
};
