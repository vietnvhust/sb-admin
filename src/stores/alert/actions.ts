import { EAlertActionType } from './types';
export const alertSuccess = (message: string) => {
    return {
        type: EAlertActionType.ALERT_SUCCESS,
        payload: message
    }
}

export const alertError = (message: string) => {
    return {
        type: EAlertActionType.ALERT_ERROR,
        payload: message
    }
}

export const clearAlert = () => {
    return {
        type: EAlertActionType.CLEAR_ALERT
    }
}