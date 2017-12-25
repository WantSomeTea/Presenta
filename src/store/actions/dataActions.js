import {
    DATA_REQUESTING,
    DATA_REQUEST_SUCCESS,
    DATA_REQUEST_ERROR
} from '../constants/actionTypes';

export const dataRequest = client => ({
    type: DATA_REQUESTING,
    client
});

export const dataRequestSuccess = data => ({
    type: DATA_REQUEST_SUCCESS,
    data
});
export const dataRequestError = error => ({
    type: DATA_REQUEST_ERROR,
    error
});