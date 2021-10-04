import { Dispatch } from "redux";
import { userApi } from "../../api";
import { IUser } from "../auth";
import { EUserActionType, IUserActionType } from "./types";

export const getAll =
  () =>
  async (dispatch: Dispatch<IUserActionType>) => {
    try {
      dispatch({
        type: EUserActionType.LOAD_USER_REQUEST,
      });
      const response: IUser[] = await userApi.getAll()
      console.log('response :>> ', response);
    } catch (error) {
      dispatch({
        type: EUserActionType.LOAD_USER_FAILED,
      });
    }
  };


