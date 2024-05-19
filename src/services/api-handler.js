import axios from "axios";
import DataHandler from "./data-handler";
import {
  ERROR_API_NOT_FOUND,
  ERROR_ACCOUNT_BLOCKED,
  ERROR_SOMETHING_WENT_WRONG,
  ERROR_NETWORK_NOT_AVAILABLE,
  BASE_URL,
} from "../config/web-service";
import { ALERT_TYPES, API_LOG, API_TIMEOUT } from "../constants";
import { logoutRequest } from "../redux/slicers/user";
import { refreshAccessToken } from "../helpers";
import { toastAlert } from "../utils";

const abortController = new AbortController();

const userBlocked = (res) => {
  toastAlert(res.data.message || ERROR_ACCOUNT_BLOCKED, ALERT_TYPES.ERROR);
  DataHandler.getStore().dispatch(logoutRequest());
  abortController.abort();
};

const onForbidden = async () => {
  const newToken = await refreshAccessToken();
  if (newToken) {
    return newToken;
  }
  toastAlert(ERROR_ACCOUNT_BLOCKED, ALERT_TYPES.ERROR);
  DataHandler.getStore().dispatch(logoutRequest());
  return false;
};

const manipulateResponse = (response) => {
  return new Promise((resolve, reject) => {
    if (response.data && !response.data.error) {
      resolve(response.data);
    } else {
      reject(response.data || ERROR_SOMETHING_WENT_WRONG);
    }
  });
};
const ApiHandler = async (request, url, data, headers, baseUrl) => {
  if (API_LOG) {
    console.log("url", baseUrl + url);
    console.log("data", data);
    console.log("headers", headers);
  }
  try {
    const response = await axios({
      baseURL: baseUrl || BASE_URL,
      timeout: API_TIMEOUT,
      method: request,
      url: url,
      data: data,
      headers: headers,
    });
    if (API_LOG) {
      console.log("response", response);
    }
    return manipulateResponse(response);
  } catch ({ response }) {
    if (!API_LOG) {
      console.log("response", response);
    }
    if (response?.status === 404) {
      return { status: false, message: ERROR_API_NOT_FOUND };
    }
    if (response?.status === 422) {
      return {
        status: false,
        isUnAuthorized: true,
        message: response.data.message,
      };
    }
    if (response.status === 405) {
      return {
        status: false,
        message: response.data.message,
        statusCode: response.status,
      };
    }
    if (response?.status === 403) {
      userBlocked(response);
      return { status: false };
    }
    if (response?.status === 401) {
      try {
        const newToken = await onForbidden();
        if (newToken) {
          headers.Authorization = `Bearer ${newToken}`;
          const responseNew = await ApiHandler(
            request,
            url,
            data,
            headers,
            baseUrl
          );
          if (responseNew.status === 403 || responseNew.status === 401) {
            userBlocked(responseNew);
            return { status: false };
          }
          return responseNew;
        } else {
          return { status: false };
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (response?.status === 500) {
      // toastAlert(ERROR_SOMETHING_WENT_WRONG, ALERT_TYPES.ERROR);
      return { status: false, message: ERROR_SOMETHING_WENT_WRONG };
    }
    if (response?.problem === "NETWORK_ERROR") {
      // toastAlert(ERROR_NETWORK_NOT_AVAILABLE, ALERT_TYPES.ERROR);
      return { status: false, message: ERROR_NETWORK_NOT_AVAILABLE };
    } else {
      if (response === undefined) {
        toastAlert(ERROR_NETWORK_NOT_AVAILABLE, ALERT_TYPES.ERROR);
      }
      if (typeof response?.data?.message == "object") {
        return { status: false, errors: response?.data?.message };
      }
      return { status: false, message: response?.data?.message };
    }
  }
};

export default ApiHandler;
