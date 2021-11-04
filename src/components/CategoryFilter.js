import React, {useEffect, useState} from 'react';
import {Checkbox, Row, Button} from "antd";
import {CURRENT_PAGE, FILTER, GET_FILMS} from "../reducers/actions";
import CheckBoxApp from "./CheckBoxApp";
import {useDispatch} from "react-redux";
import films from "../data/films.json"


function CategoryFilter() {
    const dispatch = useDispatch()
    const [filter, setFilter] = useState([])
    const [checked, setChecked] = useState(false)

    // do filter
    const onChange = (valueArray) => {
        dispatch({type: FILTER, payload: valueArray})
        dispatch({type: CURRENT_PAGE, payload: 1})
    }

    // clear filter
    const clearFilter = () => {
        dispatch({type: GET_FILMS})
        setChecked(false)
    }

    useEffect(() => {
        // remove duplicate value
        setFilter([...new Set(films.map((item) => item.category))])
    }, [])

    return (

        <>
            <Button type="primary" size="small" onClick={clearFilter}>
                Clear filter
            </Button>
            <Checkbox.Group style={{width: '100%'}} onChange={onChange}>
                <Row>
                    {
                        filter.map((item, index) => <CheckBoxApp checked={checked} key={index} category={item}/>)
                    }

                </Row>
            </Checkbox.Group>
        </>

    );
}

export default CategoryFilter;