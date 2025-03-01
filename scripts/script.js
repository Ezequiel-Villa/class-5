document.addEventListener("DOMContentLoaded",()=>{
    // all the code will be here
    const itemInput = document.getElementById("txtItem");
    const addItemBtn = document.getElementById("purchaseBtn");
    const shoppingList = document.getElementById("shoppingList");

    let items=[
        {name:"laptop",purchased:false},
        {name:"speaker",purchased:false},
        {name:"keyboard",purchased:false}
    ];// array to store items
    // function to add item to the list
    function renderList(){
        shoppingList.innerHTML = "";//clear the UI before rendering
        //update the list display
        items.forEach((item,index)=>{
            const li = document.createElement("li");
            //li.className = "theClass";
            li.innerHTML =`
                <span contenteditable="true" onBlur="editItem(${index}, this.innerText)">${item.name}</span>
                <button onclick="toggleItem(${index})">${item.purchased ? "✔" : "❌"}</button>
                <button onclick="deleteItem(${index})">🗑</button>
            `;

            li.style.textDecoration = item.purchased ? "line-through" : "none";
            shoppingList.appendChild(li);
        });
    }
   // funtion
    window.deleteItem = (deleteIndex)=>{
        items.splice(deleteIndex,1); // remove form the array
        renderList(); // update the list
        console.log(items);
    };
    window.toggleItem = (toggleIndex)=>{
        items[toggleIndex].purchased = !items[toggleIndex].purchased;
        renderList(); // update the list
    };

    window.editItem = (editIndex, newItem)=>{
        if (newItem.trim() ===""){
            alert("Item cannot be empty!");
            renderList(); // update the list
            return;
        }
        items[editIndex].name = newItem;
    };

    addItemBtn.addEventListener("click",()=>{
        let itemText = itemInput.value.trim();
        // for registering items
        if (itemText === ""){
            alert("Item cannot be empty!");
            return;
        }
        items.push({name:itemText,purchased:false});//creating obj lit and pushing to the array
        itemInput.value = ""; // clear the input field after adding the item
        renderList();
    });
    
    renderList(); // calling to display the list at the start  
    console.log(items);  
});
