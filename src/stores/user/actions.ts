import { Dispatch } from "redux";
import { userApi } from "../../api";
import { IPagination } from "../../helpers";
import { IUser } from "../auth";
import { EUserActionType, IAddUserRequest, IUserActionType } from "./types";

export const getUserPaination =
  (page: number, keyword: string) =>
  async (dispatch: Dispatch<IUserActionType>) => {
    try {
      dispatch({
        type: EUserActionType.LOAD_USER_REQUEST,
      });
      const response: IPagination<IUser> = await userApi.getUserPaination(page, keyword)
      dispatch({
        type: EUserActionType.LOAD_USER_SUCCESS,
        payload: response
      });
    } catch (error) {
      dispatch({
        type: EUserActionType.LOAD_USER_FAILED,
      });
    }
  };

  export const addUser =
  (user: IAddUserRequest) =>
  async (dispatch: Dispatch<IUserActionType>) => {
    try {
      dispatch({
        type: EUserActionType.ADD_USER_REQUEST,
      });
      const response = await userApi.addNewUser(user)
      console.log('response :>> ', response);
      dispatch({
        type: EUserActionType.ADD_USER_SUCCESS,
        payload: response
      });
    } catch (error) {
      console.log('ADD_USER_FAILED :>> ', error);
      dispatch({
        type: EUserActionType.ADD_USER_FAILED,
      });
    }
  };

