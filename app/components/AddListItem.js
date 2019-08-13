import React from "react";

class AddListItem extends React.Component {
    constructor(){
        super()
    }

    render(){
        const inputID = "new-text-" + this.props.forStore;
        let newItemText = document.getElementById(inputID) !== null ? document.getElementById(inputID).value : "waiting";
        console.log(newItemText);
        let store = this.props.forStore;

        return (
            <section>
                <input type="text" id={inputID} />
                <button onClick={(event) => this.props.addToListAction(store, newItemText)} />
            </section>
        )
    }
}

export default AddListItem;