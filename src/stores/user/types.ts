import { IPagination } from "../../helpers";
import { IUser } from "../auth";

export interface IUserState {
  users: IUser[],
  total: number,
  page: number,
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
  payload: IPagination<IUser>
}

export interface IUserFailed {
  type: typeof EUserActionType.LOAD_USER_FAILED
}

export type IUserActionType = IUserRequest | IUserSuccess | IUserFailed;