import React from "react";

import listData from "../../../listData";
import ListItem from "../../ListItem";

import AddListItem from "../../AddListItem";

const storeStyles = {
    width: "90%",
    border: "1px solid black",
    boxShadow: "5px 10px 8px #888888",
    padding: "10px",
    margin: "20px"
}

const listStyles = {
    listStyle: "none",
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
                <h3>Home Depo:</h3>
                <ul style={listStyles}>
                    {listComponents}  {/* return the array */}
                </ul>
                <AddListItem forStore={theStore} addToListAction={this.addToList} inputID={inputID}/>
            </section>
        )
    }
    
}

export default HomeDepo;