import DataSaga from './dataSaga';

export default function* IndexSaga () {
    yield [DataSaga()]
}