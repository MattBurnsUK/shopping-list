import React from "react";

import ListItem from "../ListItem";

const storeStyles = {
    width: "100%",
    border: "5px solid black",
    padding: "10px",
    margin: "20px"
}

function SaveOnFoods(){
    return (
        <section style={storeStyles}>
            <ul>
                <ListItem itemText="milk"/>
                <ListItem itemText="bread"/>
            </ul>
        </section>
    )
}

export default SaveOnFoods;