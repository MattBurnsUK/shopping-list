import React from "react";

class ListItem extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox" />
                <li>{this.props.itemText}</li>
            </div>
        )
        }
    }

export default ListItem;