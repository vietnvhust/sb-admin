import { Dispatch } from "redux";
import { IAuthActionType, IUser } from ".";
import { authApi } from "../../api";
import { EAuthActionType, IAuthLogout, IToken } from "./types";

export const login =
  (email: string, password: string) =>
  async (dispatch: Dispatch<IAuthActionType>) => {
    try {
      dispatch({
        type: EAuthActionType.LOGIN_REQUEST,
      });

      const response: IToken = await authApi.login(email, password);

      dispatch({
        type: EAuthActionType.LOGIN_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: EAuthActionType.LOGIN_FAILED,
      });
    }
  };

export const logout = (): IAuthLogout => {
  return {
    type: EAuthActionType.LOGOUT,
  };
};

export const getCurrentLoginUser =
  () =>
  async (dispatch: Dispatch<IAuthActionType>) => {
    try {
      dispatch({
        type: EAuthActionType.LOAD_CURRENT_LOGIN_USER_REQUEST,
      });
      const response: IUser = await authApi.getCurrentLoginUser()
      dispatch({
        type: EAuthActionType.LOAD_CURRENT_LOGIN_USER_SUCCESS,
        payload: response
      })
    } catch (error) {
      dispatch({
        type: EAuthActionType.LOAD_CURRENT_LOGIN_USER_FAILED,
      })
    }
  };