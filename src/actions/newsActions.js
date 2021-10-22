import axios from "axios";

import {
    NEWS_REQUEST,
    NEWS_SUCCESS,
    NEWS_FAIL,
    POPULAR_NEWS_REQUEST,
    POPULAR_NEWS_SUCCESS,
    POPULAR_NEWS_FAIL,
    CLEAR_ERRORS
} from '../constants/newsConstant';

export const getNews = () => async (dispatch) => {

    try {
        dispatch({ type: NEWS_REQUEST })

        const { data } = await axios.get('https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=3defaf1a38f74ebabcffdb78bf41beb4')

        dispatch({
            type: NEWS_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: NEWS_FAIL,
            payload: error.response.data.message
        })
    }

}

export const getPopularNews = () => async (dispatch) => {

    try {
        dispatch({ type: POPULAR_NEWS_REQUEST })

        const { data } = await axios.get('https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=3defaf1a38f74ebabcffdb78bf41beb4')

        dispatch({
            type: POPULAR_NEWS_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: POPULAR_NEWS_FAIL,
            payload: error.response.data.message
        })
    }

}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,

    })
}