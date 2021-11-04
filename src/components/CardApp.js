import React from 'react';
import {Card, Avatar, Button, Col, Popover} from 'antd';
import {LIKE, DISLIKE, DELETE_FILM} from "../reducers/actions";
import {useDispatch} from "react-redux";
import {EyeOutlined, DeleteFilled} from '@ant-design/icons';
import Like from "./Like";
import Dislike from "./Dislike";

const {Meta} = Card;

const Title = ({title, visited}) => <div>{title} <EyeOutlined/> {visited}</div>

const CardApp = ({data}) => {
    const dispatch = useDispatch();

    const {id, title, category, description, like, visited, image, dislike} = data

    const handleDeleteFilm = (id) => {
        dispatch({type: DELETE_FILM, payload: id})
    }

    const handleLike = (id) => {
        dispatch({type: LIKE, payload: id})
    }

    const handleDislike = (id) => {
        dispatch({type: DISLIKE, payload: id})
    }

    return (
        <Col className="box" span={24} md={12} lg={8} xl={6}>
            <Card
                className="card-app"
                style={{width: "100%"}}
                cover={<CoverImage image={image}/>}
                actions={[
                    <Like {...{like, handleLike, id}} />,
                    <Dislike {...{dislike, handleDislike, id}} />,
                    <Button type="primary" danger onClick={() => handleDeleteFilm(id)}>
                        <DeleteFilled />
                    </Button>,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_PDNKKD_KGnjnuckRGUiSpOxlmLT6R_KXMA&usqp=CAU"/>}
                    title={<Title title={title} visited={visited}/>}
                    description={<Description description={description} category={category} />}
                />
            </Card>
        </Col>
    )
}

const CoverImage = ({image}) => {
    return (
        <div style={{
            width: "100%",
            height: 200,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover"
        }}/>
    )
}

const Content = ({des}) => (
    <div style={{maxWidth: 300}}>
        <p>{des}</p>
    </div>
);

const Description = ({description, category}) => {
    return (
        <Popover placement="bottom" title={"Information"} content={<Content des={description} />} trigger="click">
            <div className="description">
                {description}
                <span>{category}</span>
            </div>
        </Popover>
    )
}

export default CardApp