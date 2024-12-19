import Cookies from 'js-cookie';

const AUTH_TOKEN_COOKIE = 'authToken';

export const setAuthToken = (token: string) => {
  Cookies.set(AUTH_TOKEN_COOKIE, token);
};

export const getAuthToken = () => {
  return Cookies.get(AUTH_TOKEN_COOKIE);
};

export const removeAuthToken = () => {
  Cookies.remove(AUTH_TOKEN_COOKIE);
};
