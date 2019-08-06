import React from "react";
import SaveOnFoods from "./shops/saveonfoods/SaveOnFoods.js";
import HomeDepo from "./shops/homedepo/HomeDepo.js"

function App(){
    return (
        <div class="stores">
            <SaveOnFoods />
            <HomeDepo />
        </div>
    )
}

export default App;