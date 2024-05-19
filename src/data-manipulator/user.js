import _ from "lodash";

export const manipulateUserData = (data) => {
  if (_.isEmpty(data)) return {};
  let user = {};
  user["id"] = data?.id ?? 0;

  return user;
};
