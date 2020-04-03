import * as types from "../../constants/index";

export default function homePageReducer(state = {}, action) {
  switch (action.type) {
    case types.SET_STATE_SUCCESS:
      return { ...state, data: action.data };
    default:
      return state;
  }
}
