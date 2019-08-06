import React from "react";
import Bread from "./Bread";
import Milk from "./Milk";

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
                <Bread />
                <Milk />
            </ul>
        </section>
    )
}

export default SaveOnFoods;