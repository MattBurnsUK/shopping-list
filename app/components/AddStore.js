import React from "react";

class AddStore extends React.Component {
    constructor(){
        super()
    }

    render(){

        return (
            <section>
                <input type="text" id={this.props.storeName} />
                <button style={buttonStyles} type="submit" onClick={(event) => this.props.addStoreAction(this.props.storeName)}>Add New Store</button>
            </section>
        )
    }
}

export default AddStore;