import React from 'react'
import './main.css'
const Main = () => {
    return (
        <div className="col-lg-6 pt-2 p-4">
                <div className="img-wrapper p-1">
                    <img src="/images/image1.png" alt="" />
                </div>
                <div className="content-wrapper p-2">
                    <div className="header">Acun Ilıcalı, Webrazzi Summit 2021’de merak edilernleri cevaplandıracak</div>
                    <div className="content p-0 pt-4">Türkiye'nin en bilinen insanlarından biri, dikkatleri her daim 
                    üzerinde bulunduran Acun Ilıcalı, Webrazzi Summit 2021'de 
                    merak edilenleri bizlere aktaracak.</div>
                    <div className="writer  p-0 pt-4">Gözde Ulukan <span> 3 saat önce</span></div>
                </div>
        </div>
    )
}

export default Main
