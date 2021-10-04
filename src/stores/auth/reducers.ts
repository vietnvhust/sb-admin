import { EAuthActionType } from ".";
import { IAuthState, IAuthActionType } from "./types";
const initialState: IAuthState = {
  user: null,
  loading: false,
  token: null,
  error: null,
};
export const authReducer = (
  state: IAuthState = initialState,
  action: IAuthActionType
) => {
  switch (action.type) {
    case EAuthActionType.LOGIN_REQUEST:
      return { ...state, loading: true };
    case EAuthActionType.LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload.token };
    case EAuthActionType.LOGIN_FAILED:
      return { ...state, loading: false, token: null, error: null };
    case EAuthActionType.LOGOUT:
      return { ...state, user: null, loading: false, token: null, error: null };
    case EAuthActionType.LOAD_CURRENT_LOGIN_USER_REQUEST:
      return { ...state, loading: true };
    case EAuthActionType.LOAD_CURRENT_LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    case EAuthActionType.LOAD_CURRENT_LOGIN_USER_FAILED:
      return { ...state, loading: false, token: null, error: null };
    default:
      return state;
  }
};
