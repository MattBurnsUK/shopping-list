import React from "react";

import ListItem from "../ListItem";

const storeStyles = {
    width: "100%",
    border: "5px solid black",
    padding: "10px",
    margin: "20px"
}

function HomeDepo(){
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