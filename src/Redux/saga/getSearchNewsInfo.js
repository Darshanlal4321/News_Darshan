import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { constantType as types } from '../Constant';

const newsSearchApicall = async (topic) => {
    console.log("topic::::", topic)
    let ndata = await fetch(`https://newsapi.org/v2/everything?q=${topic} india&apiKey=71095b2fac924c289796e2cda5e49625`);
    ndata = await ndata.json();
    return ndata
}

function* getSearchNewsFetchData({ topic }) {
    yield put({ type: types.LOADER_SUCCESS_TRUE });
    const newsData = yield call(newsSearchApicall, topic);
    console.log("newsSearchData:::::::::", newsData)
    try {
        yield put({ type: types.GET_SEARCH_NEWS_DATA_SUCCESS, newsSearchData: newsData });
    }
    catch (e) {
        console.log("Error", e)
    } finally {
        // console.log('Inside FInally')
        yield put({ type: types.LOADER_SUCCESS_FALSE });

    }
}


export function* getSearchNewsInfo() {

    yield takeLatest(types.GET_SEARCH_NEWS_DATA, getSearchNewsFetchData)


}

