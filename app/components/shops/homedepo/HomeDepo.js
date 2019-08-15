import React from "react";

import listData from "../../../listData";
import ListItem from "../../ListItem";

import AddListItem from "../../AddListItem";

const storeStyles = {
    width: "90%",
    maxWidth: "500px",
    boxShadow: "5px 10px 8px #888888",
    padding: "10px",
    margin: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#FFF2AB",
    borderBottom: "4px solid #ccc",
    borderRadius: "5px",
    borderTop: "4px solid yellow"
}

const listStyles = {
    listStyle: "none",
    fontSize: "1.5em",
    lineHeight: "1.5em",
    textDecoration: "none",
    padding: "10px"
}

const storeItemContainer = {
    width: "auto",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"
}

const storeHeaderStyles = {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    textDecoration: "underline",
    lineHeight: "1.5rem",
    fontSize: "x-large"
}

class HomeDepo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            listData : listData,
            storeView: "HomeDepo"
        }
        this.updateCheckbox = this.updateCheckbox.bind(this)
        this.addToList = this.addToList.bind(this)
    }

    updateCheckbox(id){
        this.setState((prevState) => {
            const newListData = prevState.listData.map(listDataItem => {
                if (listDataItem.id == id) {
                    listDataItem.purchased = !listDataItem.purchased
                }
                return listDataItem
            })
            return {
                listData: newListData
            }
        })
    }

    addToList(passedStore) {
            const inputID = "new-text-" + this.state.storeView;
            let newItemText = document.getElementById(inputID) !== null ? document.getElementById(inputID).value : "waiting";

            let itemCount = this.state.listData.length;
            let nextItemCount = itemCount+1;
            let newItemObj = {
                id: nextItemCount,
                store: passedStore,
                itemText: newItemText,
                purchased: false
            }
        this.setState((prevState) => {
                prevState.listData.push(newItemObj);
            return{
                listData: prevState.listData,
            }
        })
    }

    render() {
            /* make an array of components with associated props, where the item's store is HomeDepo */
            
            const listComponents = this.state.listData.map(item => {
                if (item.store == this.state.storeView) {
                   return (
                        <ListItem id={item.id} key={item.id} itemText={item.itemText} purchased={item.purchased} updateCheckbox={this.updateCheckbox}/>
                    )
                }
                });
            
            const theStore = this.state.storeView;
            const inputID = "new-text-" + this.state.storeView;

        return (
            <section style={storeStyles} id={theStore}>
                <section style={storeItemContainer}>
                    <h3 style={storeHeaderStyles}>Home Depo:</h3>
                    <ul style={listStyles}>
                        {listComponents}  {/* return the array */}
                    </ul>
                    <AddListItem forStore={theStore} addToListAction={this.addToList} inputID={inputID}/>
                </section>
            </section>
        )
    }
    
}

export default HomeDepo;