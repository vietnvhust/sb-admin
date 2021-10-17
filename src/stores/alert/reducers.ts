import { IAlertState, IAlertActionType, EAlertActionType } from "./types";
const initialState: IAlertState = {
  type: null,
  message: null,
};
export const alertReducer = (
  state: IAlertState = initialState,
  action: IAlertActionType
) => {
  switch (action.type) {
    case EAlertActionType.ALERT_SUCCESS:
      return { ...state, type: 'alert-success', message: action.payload };
    case EAlertActionType.ALERT_ERROR:
      return { ...state, type: 'alert-danger', message: action.payload };
    case EAlertActionType.CLEAR_ALERT:
      return { ...state, type: null, message: null };
    default:
      return state;
  }
};
