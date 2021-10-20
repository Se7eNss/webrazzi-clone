import React, { Fragment, useEffect } from 'react'
import Frame11 from './Frame11'

import {getNews} from '../../../actions/newsActions';
import { useDispatch, useSelector } from 'react-redux';

const AllFrame = () => {
    const dispatch =useDispatch();
    const{news, error}=useSelector(state=>state.news)
    useEffect(()=>{
        if(error){
            return alert.error(error)
        }
        dispatch(getNews())
    },[])
    return (
        <Fragment>
                <div className="col-lg-8 col-md-12">
                   {news.map(n =>{
                        <Frame11 n={n}/>
                   })}
            
                </div>
        </Fragment>
    )
}

export default AllFrame
