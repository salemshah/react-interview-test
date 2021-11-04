import React, {useState} from 'react';
import {Pagination} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {CURRENT_PAGE} from "../reducers/actions";
import {paginate} from "../utils/helper";


function PaginationApp() {
    const dispatch = useDispatch();
    const {getFilms:{films}, pagination: {itemParPage, currentPage}} = useSelector(state => ({...state}))
    const [current, setCurrent] = useState(1)

    const onChange = (value) => {
        dispatch({type: CURRENT_PAGE, payload: value})
        setCurrent(value)
    }

    return (
        <>
            {films.length &&
            <Pagination current={currentPage || current} onChange={onChange} total={paginate(films, itemParPage).length * 10}/>}
        </>
    );
}

export default PaginationApp;