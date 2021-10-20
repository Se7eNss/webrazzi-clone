import axios from "axios";

import {
        NEWS_REQUEST,
        NEWS_SUCCESS,
        NEWS_FAIL,
        CLEAR_ERRORS
        } from '../constants/newsConstant';

export  const getNews = () => async(dispatch) =>{

    try{
        dispatch({type: NEWS_REQUEST})

        const {data} = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-09-20&sortBy=publishedAt&apiKey=9d8d597e2ab941e191025c7e7e17ef62')
        
        dispatch({
            type:NEWS_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:NEWS_FAIL,
            payload:error.response.data.payload.message
        })
    }

}

export const clearErrors = () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS,
        
    })
}