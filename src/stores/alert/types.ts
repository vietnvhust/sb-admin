export interface IAlertState {
  type: string | null;
  message: string | null;
}

export enum EAlertActionType {
  ALERT_SUCCESS = "ALERT_SUCCESS",
  ALERT_ERROR = "ALERT_ERROR",
  CLEAR_ALERT = "CLEAR_ALERT",
}

export interface IAlertSuccess {
  type: typeof EAlertActionType.ALERT_SUCCESS;
  payload: string
}

export interface IAlertError {
  type: typeof EAlertActionType.ALERT_ERROR;
  payload: string
}

export interface IClearAlert {
  type: typeof EAlertActionType.CLEAR_ALERT;
}

export type IAlertActionType = IAlertSuccess | IAlertError | IClearAlert;