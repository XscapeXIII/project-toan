import { createReducer } from "@reduxjs/toolkit";
import { GENDER_ACTION, REQUEST, SUCCESS, FAIL } from "redux/constants";

const initialState = {
  genderList: {
    data: [],
    load: false,
    error: "",
  },
};

const genderReducer = createReducer(initialState, {
  //GET GENDER LIST
  [REQUEST(GENDER_ACTION.GET_GENDER_LIST)]: (state, action) => {
    return {
      ...state,
      genderList: {
        ...state.genderList,
        load: true,
      },
    };
  },
  [SUCCESS(GENDER_ACTION.GET_GENDER_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      genderList: {
        ...state.genderList,
        data: data,
        load: false,
      },
    };
  },
  [FAIL(GENDER_ACTION.GET_GENDER_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      genderList: {
        ...state.genderList,
        load: false,
        error: error,
      },
    };
  },
});

export default genderReducer;
