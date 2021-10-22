import {
    NEWS_REQUEST,
    NEWS_SUCCESS,
    NEWS_FAIL,
    POPULAR_NEWS_REQUEST,
    POPULAR_NEWS_SUCCESS,
    POPULAR_NEWS_FAIL,
    CLEAR_ERRORS
    } from '../constants/newsConstant';


export const newsReducer = (state={news:[]},action)=>{
    switch (action.type) {
        case NEWS_REQUEST:
                return{
                    loading:true,
                    news:[]
                }
        case NEWS_SUCCESS:
            return{
                loading:false,
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

export const popularNewsReducer = (state={popularNews:[]},action)=>{
    switch (action.type) {
        case POPULAR_NEWS_REQUEST:
                return{ 
                    popularNews:[]
                }
        case POPULAR_NEWS_SUCCESS:
            return{
                popularNews: action.payload.articles,
            }
        case POPULAR_NEWS_FAIL:
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