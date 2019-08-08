import React from "react";

class ListItem extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
            {console.log(this.props.purchased)}
            {console.log(this.props.id)}
            {console.log(this.props.itemText)}
                <input
                    type="checkbox" 
                    checked = {this.props.purchased}
                    onChange = {(event) => this.props.updateCheckbox(this.props.key)}  //this will recieve an event object, so can't be accessed by props.updateCheckbox
                    /*
                    Above line says onChange, call props.updateCheckbox with a parameter of the item id.
                    This will invoke the updateCheckbox(id) method, since the whole updateCheckbox method is being passed as a prop
                    */
                    />
                <li>{this.props.itemText}</li>
            </div>
        )
        }
    }

export default ListItem;