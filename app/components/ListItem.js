import React from "react";

const listItemStylesChecked = {
    textDecoration: "line-through"
}

class ListItem extends React.Component {
    constructor(props){
        super(props)
        this.getListItemStyles = this.getListItemStyles.bind(this)
    }

    getListItemStyles(purchased){
        if (purchased === true){
            return (listItemStylesChecked)
        }
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
                    {console.log(this.props.purchased)}
                <li style={this.getListItemStyles(this.props.purchased)}>{this.props.itemText}</li>
            </div>
        )
        }
    }

export default ListItem;