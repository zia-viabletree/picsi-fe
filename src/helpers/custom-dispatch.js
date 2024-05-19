import { useState } from "react";
import { useDispatch } from "react-redux";

export const CustomDispatch = (request, loading = false) => {
  const [isLoading, setLoading] = useState(loading);
  const dispatch = useDispatch();

  const sendRequest = (args = {}) => {
    const {
      payload,
      queryParams,
      pathParams,
      logic,
      error,
      callback,
      otherkeys = {},
    } = args;
    setLoading(true);
    dispatch(
      request({
        payload,
        queryParams,
        pathParams,
        ...otherkeys,
        responseCallback(isApiSucceed, response) {
          callback && callback(response);
          setLoading(false);
          if (isApiSucceed === false) {
            error && error(response);
            return;
          }
          logic && logic(response);
        },
      })
    );
  };

  return [sendRequest, isLoading];
};
