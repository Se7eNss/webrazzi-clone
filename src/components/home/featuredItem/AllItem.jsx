import React from 'react'
import Item from './Item'
import { useDispatch, useSelector } from 'react-redux';
const AllItem = () => {

    const{news, error}=useSelector(state=>state.news)

    return (
        <div className="col-lg-6">
            <h4 className="mt-2">Öne Çıkanlar</h4>
            {news.slice(5,10).map(newb=>(
                <Item newb={newb}/>
            ))}
        </div>
    )
}

export default AllItem
