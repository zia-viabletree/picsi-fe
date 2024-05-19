import { take, put, call, fork } from "redux-saga/effects";
import { loginRequest, loginSuccess } from "../slicers/user";
import { ALERT_TYPES } from "../../constants";
import { callRequest, USER_LOGIN } from "../../config/web-service";
import { toastAlert } from "../../utils";
import { manipulateUserData } from "../../data-manipulator/user";

// USER LOGIN
function* login() {
  while (true) {
    const {
      payload: { payload, responseCallback },
    } = yield take(loginRequest.type);
    try {
      const response = yield call(callRequest, {
        url: USER_LOGIN,
        payload,
      });
      responseCallback?.(response.status ? true : false, response);
      if (response.status) {
        yield put(loginSuccess(manipulateUserData(response.data)));
      } else {
        response.message && toastAlert(response.message, ALERT_TYPES.error);
      }
    } catch (err) {
      responseCallback?.(false, err);
    }
  }
}
export default function* root() {
  yield fork(login);
}
