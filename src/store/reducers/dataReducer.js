import initialState from '../initialState';
import {
    DATA_REQUESTING,
    DATA_REQUEST_SUCCESS,
    DATA_REQUEST_ERROR
} from '../constants/actionTypes';

export default function(state = initialState.poll, action) {
    switch (action.type) {
        case DATA_REQUESTING:
            return {
                ...state,
                requesting: false,
                successful: true,
                errors: []
            };
        case DATA_REQUEST_SUCCESS:
            return {
                data: action.data,
                requesting: false,
                successful: true,
                errors: []
            };
        case DATA_REQUEST_ERROR:
            return {
                requesting: false,
                successful: false,
                messages: [],
                errors: state.errors.concat([
                    {
                        message: action.error.response.statusText,
                        status: action.error.response.status
                    }
                ])
            };
        default:
            return state;
    }
}
