import { createStore, applyMiddleware } from 'redux';
import netPlannerReducer from './global-reducer';
import createSagaMiddleware from '@redux-saga/core';
import { globalWatcher } from './global-watcher';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(netPlannerReducer, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(globalWatcher)