import React from "react";
import SaveOnFoods from "./shops/saveonfoods/SaveOnFoods.js";
import HomeDepo from "./shops/homedepo/HomeDepo.js"


class App extends React.Component {
    render(){
        return (
            <div className="">
                <SaveOnFoods />
                <HomeDepo />
            </div>
        )
    }
}

export default App;