import { LOGIN_REQUEST } from "./constants";
import { takeLatest } from "redux-saga/effects";

export function* watchAuth() {
  yield takeLatest(LOGIN_REQUEST, loginRequest);
}

function* loginRequest() {
  console.log(">>>>>>>>>>>>>>>>");
}
