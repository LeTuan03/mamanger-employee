import axiosMiddleware from "redux-axios-middleware";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./reducers/RootReducer";
import HttpService from "app/services/HttpService";
import rootSagas from "./sagas/rootSagas";

const initialState = {};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, axiosMiddleware(HttpService.getAxiosClient())];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(
    RootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares, sagaMiddleware))
);

sagaMiddleware.run(rootSagas);
