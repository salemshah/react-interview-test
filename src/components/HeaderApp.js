import React, {useState} from 'react';
import {Input, Layout} from "antd";
import {useDispatch} from "react-redux";
import {SEARCH} from "../reducers/actions";
const {Header} = Layout
const {Search} = Input

function HeaderApp() {
    const dispatch = useDispatch();
    const [value, setValue] = useState("")
    const onSearch = (search) => {
        console.log(search)
    }


    const handleChange = (e) =>{
        setValue(e.target.value)
        dispatch({type: SEARCH, payload: e.target.value})
    }

    return (
        <Header className="site-layout-background" style={{padding: 0}}>
            <div className="search">
                <Search className="search-box" value={value} placeholder="Search film" size="large" onChange={handleChange} onSearch={onSearch} enterButton/>
            </div>
        </Header>
    );
}

export default HeaderApp;