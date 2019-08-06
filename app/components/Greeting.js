import React from "react";

function Greeting() {
    const date = new Date();
    const hours = date.getHours();
    let Greeting;

    if (hours < 12) {
        Greeting = "Good morning"
    } else if (hours <= 5) {
        Greeting = "Good afternoon"
    } else {
        Greeting = "Good evening"
    }

    return Greeting;
}