import React from "react";

class ListItem extends React.Component {
    constructor(){
        super()
        this.updateCheckbox = this.updateCheckbox.bind(this)
    }

    updateCheckbox(id){
        console.log("changed", id)
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
                    onChange = {(event) => this.updateCheckbox(this.props.id)}  //this will recieve an event object, so can't be accessed by just this.updateCheckbox
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