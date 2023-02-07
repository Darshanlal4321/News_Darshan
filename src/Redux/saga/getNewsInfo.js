import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { constantType as types } from '../Constant';

const newsApicall = async (topic) => {
    console.log("topic::::", topic)

    let ndata = await fetch(`https://newsapi.org/v2/everything?q=${topic} india&apiKey=71095b2fac924c289796e2cda5e49625`);
    ndata = await ndata.json();
    console.log("ndata:::::", ndata)
    // if (ndata.articles.length > 0) {
    //     put({ type: types.LOADER_SUCCESS_FALSE });

    // }
    return ndata
}

function* getNewsFetchData({ topic }) {
    yield put({ type: types.LOADER_SUCCESS_TRUE });
    const newsData = yield call(newsApicall, topic);
    console.log("newsData:::::::::", newsData)
    // yield put({ type: types.LOADER_SUCCESS_FALSE });
    try {
        yield put({ type: types.GET_NEWS_DATA_SUCCESS, newsData: newsData });
    }
    catch (e) {
        console.log("Error", e)
    } finally {
        console.log('Inside FInally')
        yield put({ type: types.LOADER_SUCCESS_FALSE });

    }

}


export function* getNewsInfo() {
    yield takeLatest(types.GET_NEWS_DATA, getNewsFetchData)
}

