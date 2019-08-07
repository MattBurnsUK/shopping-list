import React from "react";

function AddListItem(){
    function addNewItem(e){
        console.log (e.target.value);
        let newItem = document.getElementById("new-item-text");
        console.log (newItem.value);
    }

    return (
        <section>
            <input type="text" id="new-item-text" />
            <button onClick={addNewItem} />
        </section>
    )
}

export default AddListItem;