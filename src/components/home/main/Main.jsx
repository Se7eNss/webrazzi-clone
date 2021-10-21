import React,{Fragment, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import {format} from 'timeago.js'
import './main.css'

const Main = () => {
    const{popularNews,loading}=useSelector(state=>state.popularNews) 
    const mainNew = _.head(popularNews);
    return (
    <>
    {loading ? ('Loading'):(
        <div className="col-lg-6 pt-2 p-4">
            {/* <div className="img-wrapper p-1">
                <img src={mainNew.urlToImage} alt="" />
            </div>
            <div className="content-wrapper p-2">
                <div className="header">{mainNew.title}</div>
                <div className="content p-0 pt-4">{mainNew.description}</div>
                <div className="writer  p-0 pt-4">{mainNew.author} <span> {format(mainNew.publishedAt)}</span></div>
            </div> */}
        </div>   
    )}     
    </>
    )
}

export default Main
