import { IUser } from "../auth";

export interface IUserState {
  users: IUser[] | null,
  loading: boolean
}

export enum EUserActionType {
  LOAD_USER_REQUEST = "LOAD_USER_REQUEST",
  LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS",
  LOAD_USER_FAILED = "LOAD_USER_FAILED",
}

export type IUserRequest = {
  type: typeof EUserActionType.LOAD_USER_REQUEST
}

export interface IUserSuccess {
  type: typeof EUserActionType.LOAD_USER_SUCCESS
  payload: IUser[]
}

export interface IUserFailed {
  type: typeof EUserActionType.LOAD_USER_FAILED
}

export type IUserActionType = IUserRequest | IUserSuccess | IUserFailed;