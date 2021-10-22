import React, { useEffect } from 'react'
import Frame19 from './Frame19';

import { getPopularNews } from '../../../actions/newsActions';
import { useDispatch, useSelector } from 'react-redux';
const AllFrame19 = () => {
    const dispatch = useDispatch();
    const { popularNews, error } = useSelector(state => state.popularNews)
    useEffect(() => {
        if (error) {
            return alert.error(error)
        }
        dispatch(getPopularNews())
    }, [])
    return (
        <div className="col-lg-4 mt-5 mt-lg-0 ">
            <div className="headerPop mt-2">Bugün Popüler</div>
            {popularNews.slice(0, 7).map(pop => (
                <Frame19  key={pop.title} pop={pop} />
            ))}

        </div>
    )
}

export default AllFrame19
