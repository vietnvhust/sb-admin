import { EUserActionType, IUserActionType, IUserState } from "./types";
const initialState: IUserState = {
  users: [],
  total: 0,
  page: 1,
  loading: false
};
export const userReducer = (state: IUserState = initialState, action: IUserActionType) => {
  switch (action.type) {
    case EUserActionType.LOAD_USER_REQUEST:
      return { ...state, loading: true };
    case EUserActionType.LOAD_USER_SUCCESS:
      return { ...state, loading: false, users: action.payload.items, total: action.payload.total, page: action.payload.page };
    case EUserActionType.LOAD_USER_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
};
