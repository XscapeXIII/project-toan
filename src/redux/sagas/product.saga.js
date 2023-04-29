import { put, takeEvery, debounce } from "redux-saga/effects";
import axios from "axios";

import { PRODUCT_ACTION, REQUEST, SUCCESS, FAIL } from "../constants/";

function* getProductListSaga(action) {
  try {
    const { page, limit, categoryId, more, searchKey, sort } = action.payload;

    const result = yield axios.get("http://localhost:4000/products", {
      params: {
        //relationship
        _expand: "category",
        //paging
        _page: page,
        _limit: limit,
        //filter
        categoryId: categoryId,
        q: searchKey,
        ...(sort && {
          _sort: sort.split(".")[0],
          _order: sort.split(".")[1],
        }),
      },
    });
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST),
      payload: {
        data: result.data,
        meta: {
          page: page,
          limit: limit,
          total: parseInt(result.headers["x-total-count"]),
        },
        more: more,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST),
      payload: {
        error: "Error!",
      },
    });
  }
}

function* getProductDetailSaga(action) {
  try {
    const { id } = action.payload;

    const result = yield axios.get(`http://localhost:4000/products/${id}`, {
      params: {
        _expand: "category",
      },
    });
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: {
        error: "Error!",
      },
    });
  }
}

export default function* productSaga() {
  yield debounce(
    300,
    REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST),
    getProductListSaga
  );
  yield takeEvery(
    REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
    getProductDetailSaga
  );
}
