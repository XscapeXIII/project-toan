import { createReducer } from "@reduxjs/toolkit";

import { PRODUCT_ACTION, REQUEST, SUCCESS, FAIL } from "../constants/";

const initialState = {
  productList: {
    data: [],
    meta: {},
    load: false,
    error: "",
  },
  productDetail: {
    data: {},
    load: false,
    error: "",
  },
  createProductData: {
    load: false,
    error: "",
  },
  updateProductData: {
    load: false,
    error: "",
  },
  deleteProductData: {
    load: false,
    error: "",
  },
};

const productReducer = createReducer(initialState, {
  //GET PRODUCT LIST
  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    return {
      ...state,
      productList: {
        ...state.productList,
        load: true,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    const { data, meta, more } = action.payload;
    return {
      ...state,
      productList: {
        ...state.productList,
        data: more ? [...state.productList.data, ...data] : data,
        meta: meta,
        load: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productList: {
        ...state.productList,
        load: false,
        error: error,
      },
    };
  },
  //GET PRODUCT DETAIL
  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        load: true,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        data: data,
        load: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        load: false,
        error: error,
      },
    };
  },
  // CREATE_PRODUCT
  [REQUEST(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      createProductData: {
        ...state.createProductData,
        load: true,
        error: "",
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      createProductData: {
        ...state.createProductData,
        load: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createProductData: {
        ...state.createProductData,
        load: false,
        error: error,
      },
    };
  },

  // UPDATE_PRODUCT
  [REQUEST(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      updateProductData: {
        ...state.updateProductData,
        load: true,
        error: "",
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      updateProductData: {
        ...state.updateProductData,
        load: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateProductData: {
        ...state.updateProductData,
        load: false,
        error: error,
      },
    };
  },
  // DELETE_PRODUCT
  [REQUEST(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      deleteProductData: {
        ...state.deleteProductData,
        load: true,
        error: "",
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      deleteProductData: {
        ...state.deleteProductData,
        load: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      deleteProductData: {
        ...state.deleteProductData,
        load: false,
        error: error,
      },
    };
  },

  // Cách 2 của favorite product, tối ưu performance hơn

  // [SUCCESS(FAVORITE_ACTION.FAVORITE_PRODUCT)]: (state, action) => {
  //   const { data } = action.payload;
  //   return {
  //     ...state,
  //     productDetail: {
  //       ...state.productDetail,
  //       data: {
  //         ...state.productDetail.data,
  //         favorites: [...state.productDetail.data.favorites, data],
  //       },
  //     },
  //   };
  // },

  // [SUCCESS(FAVORITE_ACTION.UN_FAVORITE_PRODUCT)]: (state, action) => {
  //   const { id } = action.payload;
  //   const newFavorites = state.productDetail.data.favorites?.filter(
  //     (item) => item.id !== id
  //   );
  //   return {
  //     ...state,
  //     productDetail: {
  //       ...state.productDetail,
  //       data: {
  //         ...state.productDetail.data,
  //         favorites: newFavorites,
  //       },
  //     },
  //   };
  // },
});

export default productReducer;
