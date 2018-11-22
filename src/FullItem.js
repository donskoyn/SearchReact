import React from 'react';
import "./FullItem.css"
function FullList(props) {
    return(
        <li className="itemLi">
            <h2 className="itemH1">{props.item.name}</h2>
            <p className="itemP">{props.item.url}</p>
        </li>
    )
}
export default FullList