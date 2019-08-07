import React from "react";

import listData from "../../../listData";
import ListItem from "../../ListItem";

import AddListItem from "../../AddListItem";

const storeStyles = {
    width: "90%",
    border: "1px solid black",
    boxShadow: "5px 10px 8px #888888",
    padding: "10px",
    margin: "20px"
}

const listStyles = {
    listStyle: "none",
}

function SaveOnFoods(){

    const listComponents = listData.map(function(item) {
        if (item.store == "SaveOnFoods") {
            return (
                <ListItem key={item.id} itemText={item.itemText} />
            )
        }
        })

    return (
        <section style={storeStyles}>
            <h3>Save On Foods:</h3>
            <ul style={listStyles}>
                {listComponents}
            </ul>
            <AddListItem />
        </section>
    )
}

export default SaveOnFoods;