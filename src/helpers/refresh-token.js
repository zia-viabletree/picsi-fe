import { BASE_URL } from "../config/web-service";
import { logoutRequest } from "../redux/slicers/user";
import axios from "axios";
import DataHandler from "../services/data-handler";
import { getCurrentRefreshToken, toastAlert } from "../utils";
import { ALERT_TYPES } from "../constants";

// GENERATE REFRESH TOKEN
export const refreshAccessToken = async () => {
  const url = "api/auth/refreshToken";
  const method = "POST";
  const headers = { Authorization: `Bearer ${getCurrentRefreshToken()}` };
  try {
    const response = await axios({
      baseURL: BASE_URL,
      method: method,
      url: url,
      headers: headers,
    });
    return response.data?.accessToken;
  } catch ({ response }) {
    toastAlert(response.data.message, ALERT_TYPES.ERROR);
    DataHandler.getStore().dispatch(logoutRequest());
    return false;
  }
};
