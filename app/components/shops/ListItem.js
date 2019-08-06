import React from "react";

function ListItem(props){
    return (
        <div>
            <input type="checkbox" />
            <li>{props.itemText}</li>
        </div>
    )
}

export default ListItem;