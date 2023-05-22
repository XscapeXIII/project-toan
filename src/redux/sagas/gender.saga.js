import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { GENDER_ACTION, REQUEST, SUCCESS, FAIL } from "../constants/";

function* getGenderListSaga(action) {
  try {
    const result = yield axios.get("http://localhost:5000/gender", {
      params: {
        _embed: "products",
      },
    });
    yield put({
      type: SUCCESS(GENDER_ACTION.GET_GENDER_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(GENDER_ACTION.GET_GENDER_LIST),
      payload: {
        error: "Error!",
      },
    });
  }
}
export default function* categorySaga() {
  yield takeEvery(REQUEST(GENDER_ACTION.GET_GENDER_LIST), getGenderListSaga);
}
