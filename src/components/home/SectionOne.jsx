import React from 'react'
import AllItem from './featuredItem/AllItem'
import Main from './main/Main'
import { useSelector } from 'react-redux'
const SectionOne = () => {
    const{loading}=useSelector(state=>state.popularNews)
    return (
        <>
        {loading ? ('LOADİNG'):(
        <div className="container">
            <div className="row">
                <Main/>
                <AllItem/>
            </div>
        </div>)}
        </>
    )
}

export default SectionOne
