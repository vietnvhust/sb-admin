import axios from "axios";
import { IAuthState } from "../stores/auth";
import { AppState, store } from "../stores/stores";
export const axiosClient = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface AxiosRequestConfig {
  baseUrl?: string;
  headers?: any;
}

let currentState = store.getState() as AppState;
let token: string;
store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState() as AppState;
  // if the token changes set the value in localStorage and axios headers
  const previousAuth: IAuthState = previousState.auth;
  const previousToken = previousAuth.token;

  const currentAuth: IAuthState = currentState.auth;
  const currentToken = currentAuth.token;

  if (previousToken === currentToken) {
    if (!!currentToken) {
      token = currentToken;
    }
  }
});
// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig): AxiosRequestConfig {
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});
