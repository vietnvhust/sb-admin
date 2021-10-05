import { EUserActionType, IUserActionType, IUserState } from "./types";
const initialState: IUserState = {
  users: null,
  loading: false
};
export const userReducer = (state: IUserState = initialState, action: IUserActionType) => {
  switch (action.type) {
    case EUserActionType.LOAD_USER_REQUEST:
      return { ...state, loading: true };
    case EUserActionType.LOAD_USER_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case EUserActionType.LOAD_USER_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
};
