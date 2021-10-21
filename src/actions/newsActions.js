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

export  const getNews = () => async(dispatch) =>{

    try{
        dispatch({type: NEWS_REQUEST})

        const {data} = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-09-21&sortBy=publishedAt&apiKey=9d8d597e2ab941e191025c7e7e17ef62')
        
        dispatch({
            type:NEWS_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:NEWS_FAIL,
            payload:error.response.data.payload
        })
    }

}

export  const getPopularNews = () => async(dispatch) =>{

    try{
        dispatch({type: POPULAR_NEWS_REQUEST})

        const {data} = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2021-10-20&to=2021-10-20&sortBy=popularity&apiKey=9d8d597e2ab941e191025c7e7e17ef62')
        
        dispatch({
            type:POPULAR_NEWS_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:POPULAR_NEWS_FAIL,
            payload:error.response.data.payload
        })
    }

}

export const clearErrors = () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS,
        
    })
}