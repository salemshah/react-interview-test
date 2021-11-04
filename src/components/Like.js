import React from 'react';
import {LikeFilled, LikeOutlined} from "@ant-design/icons";

function Like({like, handleLike, id}) {
    return (
        <div>
            {
                like
                    ? <LikeFilled onClick={() => handleLike(id)} className="icon-style" key="like"/>
                    : <LikeOutlined onClick={() => handleLike(id)} className="icon-style" key="like"/>
            }
            {like ? 1 : 0}
        </div>
    );
}

export default Like;