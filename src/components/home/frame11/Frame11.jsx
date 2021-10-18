import React from 'react';
import "./frame11.css";

export default function Frame11() {
    return (
        <div className=" frame-container ">
            <div className="row">
                <div className="frame-articles col-lg-6 order-lg-0 order-1">
                    <div className="news-topic ">Yatırım</div>
                    <div className="news-title mt-1">Binance'tan BSC'yi desteklemek için 1 milyar dolarlık fon</div>
                    <div className="news-content mt-1">Günümüzün en önemli kripto para borsaları arasında yer alan Binance'in NFT pazar yeri Binance… </div>
                    <div className="news-writer mt-2">Arda Papuçuyarım</div>
                </div>
                <div className="frame-img col-lg-6">
                    <img className="p-4" src="/images/image3.png" alt="" />
                </div>
            </div>
        </div>
    )
}