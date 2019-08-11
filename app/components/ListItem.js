import React from "react";

class ListItem extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div>
                <input
                    type="checkbox" 
                    checked = {this.props.purchased}
                    onChange = {(event) => this.props.updateCheckbox(this.props.id)}  //this will recieve an event object, so can't be accessed by just this.updateCheckbox
                    /*
                    Above line says onChange, call this.updateCheckbox with a parameter of the item id which is obtained from props.
                    This will invoke the updateCheckbox(id) method
                    */
                    />
                <li>{this.props.itemText}</li>
            </div>
        )
        }
    }

export default ListItem;