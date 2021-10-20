import { createStore,combineReducers , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {newsReducer} from './reducers/newsReducers'

const reducer = combineReducers({
    news:newsReducer
})

let initialState = {};


const middleware = [thunk];
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));


export default store;