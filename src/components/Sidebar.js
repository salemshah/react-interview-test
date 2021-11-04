import React, {useState} from 'react';
import {Divider, Layout, Select} from "antd";
import CategoryFilter from "./CategoryFilter";
import {useDispatch} from "react-redux";
import {PAGINATION} from "../reducers/actions";

const {Option} = Select
const {Sider} = Layout;

function Sidebar({dataToFilter}) {

    const dispatch = useDispatch()
    const [show, setShow] = useState(false)

    const handleChange = (value) => {
        dispatch({type: PAGINATION, payload: parseInt(value)})
    }

    return (
        <Sider
            style={{backgroundColor: "#fff"}}
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed) => {
                setShow(collapsed)
            }}
        >
            <div className="logo"/>

            <div className="filter" style={{display: !show ? "block" : "none"}}>
                <Divider className="custom-divider" orientation="left">
                    Category
                </Divider>
                <div className="category">
                    <CategoryFilter data={dataToFilter}/>
                </div>
                <Divider className="custom-divider" orientation="left">
                    Item par page
                </Divider>

                <Select defaultValue="5" style={{width: "100%", textAlign: "center"}} onChange={handleChange}>
                    <Option value="5">5</Option>
                    <Option value="10">10</Option>
                    <Option value="15">15</Option>
                    <Option value="20">20</Option>
                    <Option value="20">25</Option>
                </Select>
            </div>
        </Sider>
    );
}

export default Sidebar;