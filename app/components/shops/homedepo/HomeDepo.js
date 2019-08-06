import React from "react";
import Wood from "./Wood";
import Nails from "./Nail";

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
                <Wood />
                <Nails />
            </ul>
        </section>
    )
}

export default HomeDepo;