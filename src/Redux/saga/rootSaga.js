
import { all } from 'redux-saga/effects';
import { getNewsInfo } from './getNewsInfo';
import { getSearchNewsInfo } from './getSearchNewsInfo';
export default function* rootSaga() {
    yield all([
        getNewsInfo(),
        getSearchNewsInfo()
    ]);
}
