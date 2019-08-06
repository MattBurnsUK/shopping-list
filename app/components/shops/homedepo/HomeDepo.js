import React from "react";

import listData from "../../../listData";
import ListItem from "../ListItem";

const storeStyles = {
    width: "100%",
    border: "5px solid black",
    padding: "10px",
    margin: "20px"
}

function HomeDepo(){
    
    const listComponents = listData.map(function(item) {
        if (item.store == "HomeDepo") {
            return (
                <ListItem itemText={item.itemText} />
            )
        }
        })

    return (
        <section style={storeStyles}>
            <ul>
                <ListItem itemText="wood"/>
                <ListItem itemText="nails"/>
            </ul>
        </section>
    )
}

export default HomeDepo;