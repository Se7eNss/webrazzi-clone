import _ from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import AllItem from './featuredItem/AllItem'
import Main from './main/Main'

const SectionOne = () => {
    const {popularNews} = useSelector(state=>state.popularNews)
    const mainNew = _.head(popularNews)
    return (
        <div className="container">
            <div className="row">
                {mainNew && <Main mainNew={mainNew}/>}
                <AllItem/>
            </div>
        </div>
    )
}

export default SectionOne
