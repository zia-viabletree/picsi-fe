import qs from "qs";
import _ from "lodash";
import ApiHandler from "../services/api-handler";
import { getCurrentAccessToken } from "../utils";

export const API_TIMEOUT = 30000;
export const ABORT_REQUEST_MESSAGE = "Network failed. Aborted request.";

export const BASE_URL = "https://google.com";

export const ERROR_SOMETHING_WENT_WRONG =
  "Something went wrong, Please try again later";
export const ERROR_API_NOT_FOUND = "Api not found, Please try again later";

export const ERROR_NETWORK_NOT_AVAILABLE =
  "Please connect to the working Internet";

export const ERROR_ACCOUNT_BLOCKED =
  "Either your account is blocked or deleted";

export const ERROR_TOKEN_EXPIRE = "Session Expired, Please login again!";

export const REQUEST_TYPE = {
  GET: "get",
  POST: "post",
  DELETE: "delete",
  PUT: "put",
};

// AUTH ROUTES
export const USER_LOGIN = {
  route: "/api/v1/login",
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};

export const callRequest = async ({
  url,
  payload = {},
  queryParams,
  pathParams,
  header = {},
  baseURL = BASE_URL,
  cacheBusting = false,
}) => {
  let _header = header;
  if (url.access_token_required) {
    const _access_token = getCurrentAccessToken();
    if (_access_token) {
      _header = {
        ..._header,
        ...{
          Authorization: `Bearer ${_access_token}`,
        },
      };
    }
  }
  let _url = url.route;
  if (pathParams) {
    _url = `${url.route}/${pathParams}`;
  }

  if (queryParams && !_.isEmpty(queryParams)) {
    _url = `${_url}?${
      queryParams instanceof Object ? qs.stringify(queryParams) : queryParams
    }`;
  }

  if (cacheBusting) _url += `?t${Date.now()}`;

  let response = await ApiHandler(url.type, _url, payload, _header, baseURL);
  return response;
};
