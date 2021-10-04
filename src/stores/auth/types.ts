export interface IUser {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export interface IToken {
  token: string
}

export interface IAuthState {
  user: IUser | null;
  loading: false;
  token: null;
  error: null;
}

export enum EAuthActionType {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILED = "LOGIN_FAILED",
  LOGOUT = "LOGOUT",

  LOAD_CURRENT_LOGIN_USER_REQUEST = "LOAD_CURRENT_LOGIN_USER_REQUEST",
  LOAD_CURRENT_LOGIN_USER_SUCCESS = "LOAD_CURRENT_LOGIN_USER_SUCCESS",
  LOAD_CURRENT_LOGIN_USER_FAILED = "LOAD_CURRENT_LOGIN_USER_FAILED",
}

export type IAuthLoginRequest = {
  type: typeof EAuthActionType.LOGIN_REQUEST
}

export interface IAuthLoginSuccess {
  type: typeof EAuthActionType.LOGIN_SUCCESS
  payload: IToken
}

export interface IAuthLoginFailed {
  type: typeof EAuthActionType.LOGIN_FAILED
}

export type ILoadCurrentUserRequest = {
  type: typeof EAuthActionType.LOAD_CURRENT_LOGIN_USER_REQUEST
}

export interface ILoadCurrentUserSuccess {
  type: typeof EAuthActionType.LOAD_CURRENT_LOGIN_USER_SUCCESS
  payload: IUser
}

export interface ILoadCurrentUserFailed {
  type: typeof EAuthActionType.LOAD_CURRENT_LOGIN_USER_FAILED
}

export interface IAuthLogout {
  type: typeof EAuthActionType.LOGOUT
}

export type IAuthActionType =
  | IAuthLoginRequest
  | IAuthLoginSuccess
  | IAuthLoginFailed
  | IAuthLogout
  | ILoadCurrentUserRequest
  | ILoadCurrentUserSuccess
  | ILoadCurrentUserFailed;
