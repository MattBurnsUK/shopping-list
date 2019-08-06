import React from "react";

import listData from "../../../listData";
import ListItem from "../ListItem";

const storeStyles = {
    width: "100%",
    border: "5px solid black",
    padding: "10px",
    margin: "20px"
}

function SaveOnFoods(){

    const listComponents = listData.map(function(item) {
        if (item.store == "SaveOnFoods") {
            return (
                <ListItem itemText={item.itemText} />
            )
        }
        })

    return (
        <section style={storeStyles}>
            <ul>
                {listComponents}
            </ul>
        </section>
    )
}

export default SaveOnFoods;