import React, {useEffect, useState} from 'react';
import {Layout} from 'antd';
import HeaderApp from "./components/HeaderApp";
import {useDispatch, useSelector} from 'react-redux';
import {GET_FILMS} from "./reducers/actions"
import Sidebar from "./components/Sidebar";
import PaginationApp from "./components/PaginationApp";
import ContentApp from "./components/ContentApp";

const { Footer} = Layout;

const App = () => {
    const {getFilms:{films}} = useSelector((state) => ({...state}))
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(false)

    useEffect(() => {
        dispatch({type: GET_FILMS})
    }, [dispatch])

    return (
        <Layout>
            <Sidebar dataToFilter={films}/>
            <Layout className="site-layout" style={{marginBottom: 60}}>
                <HeaderApp {...{collapsed, setCollapsed}} />
                <ContentApp/>
            </Layout>
            <Footer style={{ textAlign: 'center', position: "fixed", bottom: 0, width: "100%" }}>
                <PaginationApp />
            </Footer>
        </Layout>
    );
}
export default App;
