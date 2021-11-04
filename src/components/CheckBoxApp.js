import React from 'react';
import {Checkbox, Col} from "antd";

function CheckBoxApp({category, checked}) {
    // console.log(category)
    return (
        <Col span={24} style={{marginBottom: 10}}>
            <Checkbox checked={checked} value={category}><h5>{category.toUpperCase()}</h5></Checkbox>
        </Col>
    );
}

export default CheckBoxApp;