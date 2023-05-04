import { put, takeEvery, debounce } from "redux-saga/effects";
import axios from "axios";
import { notification } from "antd";

import { AUTH_ACTION, REQUEST, SUCCESS, FAIL } from "../constants/";

function* loginSaga(action) {
  try {
    const { data, callback } = action.payload;

    const result = yield axios.post("http://localhost:5000/login", data);
    yield localStorage.setItem("accessToken", result.data.accessToken);
    yield callback(result.data.user.role);

    yield put({
      type: SUCCESS(AUTH_ACTION.LOGIN),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(AUTH_ACTION.LOGIN),
      payload: {
        error: "Email or password not true !",
      },
    });
  }
}

function* registerSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("http://localhost:5000/register", data);

    yield callback();

    yield put({
      type: SUCCESS(AUTH_ACTION.REGISTER),
      payload: {
        data: result.data,
      },
    });

    yield notification.success({
      message: "Đăng ký tài khoản thành công",
    });
  } catch (e) {
    yield put({
      type: FAIL(AUTH_ACTION.REGISTER),
      payload: {
        error: e.response.data,
      },
    });
  }
}

function* getUserInfoSaga(action) {
  try {
    const { id } = action.payload;

    const result = yield axios.get(`http://localhost:5000/users/${id}`);

    yield put({
      type: SUCCESS(AUTH_ACTION.GET_USER_INFO),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(AUTH_ACTION.GET_USER_INFO),
      payload: {
        error: "Không lấy thông tin user được !",
      },
    });
  }
}

export default function* authSaga() {
  yield takeEvery(REQUEST(AUTH_ACTION.LOGIN), loginSaga);
  yield takeEvery(REQUEST(AUTH_ACTION.REGISTER), registerSaga);
  yield takeEvery(REQUEST(AUTH_ACTION.GET_USER_INFO), getUserInfoSaga);
}
