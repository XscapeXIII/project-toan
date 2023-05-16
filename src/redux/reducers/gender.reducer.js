import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  genderList: {
    data: [],
    load: false,
    error: "",
  },
};

const genderReducer = createReducer(initialState, {
  //CATEGORIES
  GET_CATEGORY_LIST_REQUEST: (state, action) => {
    return {
      ...state,
      genderList: {
        ...state.genderList,
        load: true,
      },
    };
  },
  GET_CATEGORY_LIST_SUCCESS: (state, action) => {
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
  GET_CATEGORY_LIST_FAIL: (state, action) => {
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
