import React, { Fragment, useEffect } from 'react'
import Frame11 from './Frame11'

import { getNews } from '../../../actions/newsActions';
import { useDispatch, useSelector } from 'react-redux';

const AllFrame = () => {
    const dispatch = useDispatch();
    const { news, error } = useSelector(state => state.news)
    useEffect(() => {
        if (error) {
            return alert(error)
        }
        dispatch(getNews())
    }, [dispatch])
    console.log(news)
    return (
        <Fragment>
            <div className="col-lg-8 col-md-12">
                {news.slice(0, 5).map((newa) => (
                    <Frame11  key={newa.title} newa={newa} />
                ))}
            </div>
        </Fragment>
    )
}

export default AllFrame
