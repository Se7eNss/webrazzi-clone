import React from 'react'
import './frame19.css'

const frame19 = ({pop}) => {

    return (
        <div className="popular-wrapper col-lg-12 ">
            <div className="baslik">{pop.title} </div>
            <div className="writer">{pop.author}</div>
        </div>
    )
}

export default frame19
