import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './reducer/RootReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga/rootSaga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    RootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)
export default store;

// const store = compose(
//     applyMiddleware(sagaMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// )(createStore)(RootReducer);
// sagaMiddleware.run(rootSaga);

// export default store;
