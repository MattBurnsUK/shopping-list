import React from "react";

const buttonStyles = {
    padding: "0.25rem 0.5rem",
    margin: "0.25rem",
    borderRadius: "0.25rem",
    backgroundColor: "#DD6031",
    color: "white",
    fontSize: "1rem",
    lineHeight: "1.2",
    whiteSpace: "nowrap",
    textDecoration: "none",
    cursor: "pointer"
}
class AddListItem extends React.Component {
    constructor(){
        super()
    }

    render(){
        let store = this.props.forStore;

        return (
            <section>
                <input type="text" id={this.props.inputID} />
                <button style={buttonStyles} type="submit" onClick={(event) => this.props.addToListAction(store)}>Add To List</button>
            </section>
        )
    }
}

export default AddListItem;