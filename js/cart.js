// This contains the cart class

class Cart{
    constructor(currentId = 0){
        this.items = [];
        this.currentId = currentId;
        this.totalPrice = 0;
    }

    addItem(item, quantity){
        // if the item already exists in the cart, update the quantity
        console.log(item);
        // otherwise, add item to the cart:
        this.totalPrice += item.price * quantity;
        this.items.push(item);
    }

    // getItemById(items, id){

    //     const found = items.find((item) => {
    //         item.id === id
    //     });
    //     console.log(found);
    //     return found;
    //     // items.map((item) => {
    //     //     console.log(`The item.id is ${item.id}, is this the same as the supplied id: ${id}?`);
    //     //     if(item.id == id){
    //     //         console.log(`We have found the item: ${item.name}!`)
    //     //         return item;
    //     //     }
    //     // });
        
    // }

}

function hello() {
    console.log("Hello, world!")

}

export {hello, Cart};