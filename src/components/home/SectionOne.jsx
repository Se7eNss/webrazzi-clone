import React from 'react'
import AllItem from './featuredItem/AllItem'
import Main from './main/Main'
const SectionOne = () => {
    return (
        <div className="container">
            <div className="row">
                <Main/>
                <AllItem/>
            </div>
            
        </div>
    )
}

export default SectionOne
