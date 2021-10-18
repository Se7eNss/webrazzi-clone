import React, { Fragment } from 'react'
import AllFrame from './frame11/AllFrame'
import AllFrame19 from './frame19/AllFrame19'
const SectionTwo = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="headerEffect mt-3" style={{backgroundImage: ` url("/images/HeaderEffect.png")`}}>
                    <h1 className="col-lg-8 offset-2 mt-4">Son Eklenenler</h1>
                </div>  
            </div>
            <div className="container">
                <div className="row allframe">
                    <AllFrame/>
                    <AllFrame19/>
                </div>
            </div>
        </Fragment>
       
    )
}

export default SectionTwo
