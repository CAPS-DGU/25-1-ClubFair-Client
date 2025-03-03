import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, options) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name) => {
  return cookies.remove(name, { path: "/" });
};

export const CheckLogin = () => {
  console.log(getCookie("access_token"));
  if (getCookie("access_token") !== "undefined") {
    return true;
  } else {
    return false;
  }
};
