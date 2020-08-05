import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducers from "./reducers";

const middleware = [
    ReduxThunk,
    promiseMiddleware,
]

export default createStore(combineReducers, composeWithDevTools(applyMiddleware(...middleware)))