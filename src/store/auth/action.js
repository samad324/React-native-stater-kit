import { LOGIN_REQUEST } from "./constants";

export const login = payload => ({
  type: LOGIN_REQUEST,
  payload
});
