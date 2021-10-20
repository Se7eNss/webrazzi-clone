import {
    NEWS_REQUEST,
    NEWS_SUCCESS,
    NEWS_FAIL,
    CLEAR_ERRORS
    } from '../constants/newsConstant';


export const newsReducer = (state={news:[]},action)=>{
    switch (action.type) {
        case NEWS_REQUEST:
                return{
                    news:[]
                }
        case NEWS_SUCCESS:
            return{
                news: action.payload.articles,
            }
        case NEWS_FAIL:
            return{
                error:action.payload
            }
        case CLEAR_ERRORS:
            return{
                ...state,   
                error:null
                }
        default:
            return state;
    }
}