import React from "react";

import listData from "../../../listData";
import ListItem from "../../ListItem";

import AddListItem from "../../AddListItem";

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

class SaveOnFoods extends React.Component {
    constructor(){
        super()
        this.state = {
            listData: listData
        }
    }

    render(){
        /* make an array of components with associated props, where the item's store is SaveOnFoods */

        const listComponents = this.state.listData.map(function(item) {
            if (item.store == "SaveOnFoods") {
                return (
                    <ListItem key={item.id} itemText={item.itemText} purchased={item.purchased}/>
                )
            }
            })

        return (
            <section style={storeStyles}>
                <h3>Save On Foods:</h3>
                <ul style={listStyles}>
                    {listComponents}  {/* return the array */}
                </ul>
                <AddListItem />
            </section>
        )
    }
    
}

export default SaveOnFoods;