import * as types from "../constants";
import { beginAction } from "./statusActions";

export const getInitialState = text => {
  return function (dispatch) {
    dispatch(beginAction());
    let data = {
      type: types.SET_STATE_SUCCESS,
      data:
        "Action Resolved, As it was a slow request, Insert Text, and Click The Button To Dispatch New Action"
    };

    return setTimeout(() => dispatch(data), 3000);
  };
};

export const getNewState = text => {
  return function (dispatch) {
    dispatch(beginAction());
    console.log(text);
    let info = text[0] !== "" ? text : "U didnt Typed Anything";
    let data = {
      type: types.SET_STATE_SUCCESS,
      data: info
    };

    return setTimeout(() => dispatch(data), 10);
  };
};
