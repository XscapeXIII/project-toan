import { createReducer } from "@reduxjs/toolkit";

import { ORDER_ACTION, REQUEST, SUCCESS, FAIL } from "../constants/";

const initialState = {
  orderList: {
    data: [],
    load: false,
    error: "",
  },
};

const orderReducer = createReducer(initialState, {
  //GET ORDER LIST
  [REQUEST(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    return {
      ...state,
      orderList: {
        ...state.orderList,
        load: true,
        error: "",
      },
    };
  },
  [SUCCESS(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      orderList: {
        ...state.orderList,
        data: data,
        load: false,
      },
    };
  },
  [FAIL(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      orderList: {
        ...state.orderList,
        load: false,
        error: error,
      },
    };
  },
});

export default orderReducer;
