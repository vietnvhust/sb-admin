import { Dispatch } from "redux";
import { userApi } from "../../api";
import { IPagination } from "../../helpers";
import { IUser } from "../auth";
import { EUserActionType, IUserActionType } from "./types";

export const getAll =
  (page: number) =>
  async (dispatch: Dispatch<IUserActionType>) => {
    try {
      dispatch({
        type: EUserActionType.LOAD_USER_REQUEST,
      });
      const response: IPagination<IUser> = await userApi.getUserPaination(page)
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


