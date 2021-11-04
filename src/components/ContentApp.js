import React, {useEffect, useState} from 'react';
import {Layout, Row} from "antd";
import CardApp from "./CardApp";
import {useSelector} from "react-redux";
import {paginate} from "../utils/helper";

const { Content} = Layout;

function ContentApp() {
    const {pagination:{itemParPage, currentPage}, getFilms:{films}} = useSelector(state => ({...state}))
    const [data, setData] = useState([])
    
    useEffect(() =>{
        setData(paginate(films, itemParPage))
    }, [films, itemParPage])

    return (
        <Content className="site-layout-background content">
            <Row>
                {
                    data.length && data[currentPage - 1].map((item, index) => (
                        <CardApp key={index} data={item}/>
                    ))
                }
            </Row>
        </Content>

    );
}

export default ContentApp;