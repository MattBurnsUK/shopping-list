import React from "react";

class AddListItem extends React.Component {
    constructor(){
        super()
    }

    render(){
        const inputID = "new-text-" + this.props.forStore;

        var addNewListItem = (theStore) => {
            let newItemText = document.getElementById(inputID).value;
            let store = theStore;
                console.log("new item text is ", newItemText)
                console.log("store is ", store)
            }
        return (
            <section>
                <input type="text" id={inputID} />
                <button onClick={(event) => this.props.addToListAction(this.props.forStore)} />
            </section>
        )
    }
}

export default AddListItem;