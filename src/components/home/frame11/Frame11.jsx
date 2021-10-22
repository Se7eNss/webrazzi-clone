import React from 'react';
import "./frame11.css";

const Frame11 = ({ newa }) => {
    return (
        <div className=" frame-container mt-2">
            <div className="row">
                <div className="frame-articles col-lg-6 order-lg-0 order-1">
                    <div className="news-topic ">{newa.source.name}</div>
                    <div className="news-title ">{newa.title.slice(0, 50)}...</div>
                    <div className="news-content ">{newa.content.slice(0, 150)}...</div>
                    <div className="news-writer mt-2">{newa.author}</div>
                </div>
                <div className="frame-img col-lg-6">
                    <img className="p-4 rounded " src={newa.urlToImage} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Frame11
