import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* getGenderListSaga(action) {
  try {
    const result = yield axios.get("http://localhost:5000/gender", {
      params: {
        _embed: "products",
      },
    });
    yield put({
      type: "GET_GENDER_LIST_SUCCESS",
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: "GET_GENDER_LIST_FAIL",
      payload: {
        error: "Error!",
      },
    });
  }
}
export default function* categorySaga() {
  yield takeEvery("GET_GENDER_LIST_REQUEST", getGenderListSaga);
}
