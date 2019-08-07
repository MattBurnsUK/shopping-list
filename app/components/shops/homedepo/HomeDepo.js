import React from "react";

import listData from "../../../listData";
import ListItem from "../ListItem";

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
            <h3>Home Depo:</h3>
            <ul style={listStyles}>
                {listComponents}
            </ul>
        </section>
    )
}

export default HomeDepo;