import axios from "axios";

const BASE_URL = "";

const openAxiosInstance = axios.create({
  baseURL: BASE_URL,
});

const securedAxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const setAuthorizationToken = (token) => {
  securedAxiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
};

export { openAxiosInstance, securedAxiosInstance };
