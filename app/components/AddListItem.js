import React from "react";

class AddListItem extends React.Component {
    constructor(){
        super()
    }

    render(){
        let store = this.props.forStore;

        return (
            <section>
                <input type="text" id={this.props.inputID} />
                <button type="submit" onClick={(event) => this.props.addToListAction(store)} />
            </section>
        )
    }
}

export default AddListItem;