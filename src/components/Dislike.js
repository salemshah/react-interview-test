import React from 'react';
import {DislikeFilled, DislikeOutlined} from "@ant-design/icons";

function Dislike({dislike, handleDislike, id}) {
    return (
        <div>
            {
                !dislike
                    ? <DislikeFilled onClick={() => handleDislike(id)} className="icon-style" key="dislike"/>
                    : <DislikeOutlined onClick={() => handleDislike(id)} className="icon-style" key="dislike"/>
            }
            {!dislike ? 1 : 0}
        </div>
    );
}

export default Dislike;