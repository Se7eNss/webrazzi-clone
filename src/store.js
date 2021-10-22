import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { newsReducer, popularNewsReducer } from './reducers/newsReducers'

const reducer = combineReducers({
    news: newsReducer,
    popularNews: popularNewsReducer
})

let initialState = {};


const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store;