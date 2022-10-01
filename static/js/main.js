/* veliki komentar

// SELECT ELEMENTS
const productsEl = document.querySelector(".card");
const cartItemsEl = document.querySelector(".card");

// RENDER PRODUCTS

// za for each, nakon products. do {   "forEach( (product) => "
function renderProductsHawks(){
    products.for(let i = 0; i < products.length[0-3]; i++){
        productsEl.innerHTML += `
        <div class="card">
        <img class="card-img-top" src="${product.imgSrc}" alt="${product.name}" width="200" height="250">

        <div class="card-body" >
          <p class="card-text">${product.name}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div onclick="addToCart(${product.id})" class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">Add to Cart</button>
            </div>
            <small class="text-muted"></small>
          </div>
        </div>
        </div>
        `
    }
}
renderProductsHawks();

// cart array
let cart = [];

// ADD TO CART
function addToCart(id){
    // check if product already exists in cart
    if(cart.some((item) => item.id === id)){
        alert("Product already in cart!")
    } else {
        const item = products.find((product) => product.id === id);

        cart.push({
            ...item,
            numberOfUnits : 1,
        });
    }

    updateCart();
}

/*
// update cart
function updateCart(){
    renderCartItems();
    // renderSubTotal();
}

// render cart items
function renderCartItems(){
    cart.forEach(())
}
*/

// veliki komentar