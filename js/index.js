import {Cart, hello} from './cart.js';

const MyCart = new Cart();

// Hardcoded array of items:
const itemsForSale = [{
    name: "iPhone 13",
    img: "/product-images/1.jpg",
    price: 1249, 
    id: 1,
    },{
    name: "iPhone 13 Pro",
    img: "/product-images/2.jpg",
    price: 1699, 
    id: 2,
    },{
    name: "iPhone 13 Pro Max",
    img: "/product-images/3.jpg",
    price: 2199, 
    id: 3,
    }, {
    name: "iPhone 13 Mini",
    img: "/product-images/4.jpg",
    price: 1199, 
    id: 4,
    }
];

const productContainer = document.getElementById("product-container")

itemsForSale.map((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
    <img src="${item.img}">
    <div>${item.name}</div>
    <div>${item.price}</div>
    `;
    itemDiv.classList.add("item");
    itemDiv.dataset.id = item.id;
    
    // DEBUGGING:
    console.log(itemDiv.innerHTML);

    // The add to cart button:
    const itemButton = document.createElement("button");
    itemButton.innerHTML = "add to cart"; 
    itemButton.addEventListener("click", (e) => {
        const id = parseInt(e.target.parentElement.dataset.id);
        // get this item by id, add it to the cart!
        const item = itemsForSale.find((item) => {
            return item.id === id;
        });
        // TODO: make quantity user-selectable!
        const quantity = 1;
        MyCart.addItem(item, quantity);
        console.log(`Total price: ${MyCart.totalPrice}`)
    })
    itemDiv.appendChild(itemButton);
    productContainer.appendChild(itemDiv)  
});

// loop through the products array, add them to the DOM.

//  Next job:
// Cart array
// Cart object, with cart methods:
    // delete item
    // display cart (?)
    // 

hello();