import React from 'react'


import { format } from 'timeago.js'


import './main.css'

const Main = ({ mainNew }) => {
    return (
        <div className="col-lg-6 pt-2 p-4">
            <div className="img-wrapper p-1">
                <img src={mainNew.urlToImage} alt="" />
            </div>
            <div className="content-wrapper p-2">
                <div className="header">{mainNew.title}</div>
                <div className="content p-0 pt-4">{mainNew.description}</div>
                <div className="writer  p-0 pt-4">{mainNew.author} <span> {format(mainNew.publishedAt)}</span></div>
            </div>
        </div>
    )
}


export default Main
