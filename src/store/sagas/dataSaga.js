import { call, put, takeLatest, select, take } from 'redux-saga/effects';
import { DATA_REQUESTING } from '../constants/actionTypes';
import { dataRequestSuccess, dataRequestError } from '../actions/dataActions';
import api from '../../api/dataApi';

function* datarequestFlow(action) {
    try {
        const { requestInfo } = action;
        const response = yield call(api.get, requestInfo);
        yield put(dataRequestSuccess(response));
    } catch (error) {
        yield put(dataRequestError(error));
    }
}

function* watcher() {
    yield [takeLatest(DATA_REQUESTING, datarequestFlow)];
}

export default watcher;
