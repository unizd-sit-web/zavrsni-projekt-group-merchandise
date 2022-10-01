//        //        CART         //        //

// empty cart array
const kosarica = [];

// select element
const productsEl = document.querySelector(".products");

// render items into cart
function renderCartItems() {
    
    Object.keys(localStorage).forEach((key) => {

        productsEl.innerHTML += `
        <div style="border-top:1px solid gray; border-bottom:1px solid gray; display:flex; justify-content:space-between; padding:10px;">
        <p class="alignLeft">${JSON.parse(localStorage.getItem(key))}</p>
        
        <p class="alignRight">
        <button onclick="handleDecrement()" type="button">-</button>
        <button id="score" type="button" disabled>1</button>
        <button onclick="handleIncrement()" type="button">+</button>
        </p>

        </div>
        
        `
        
    });
}
renderCartItems();

// add cart items to arraylist
function cartToListToFlask() {
    Object.keys(localStorage).forEach((key) => {
        let item = JSON.parse(localStorage.getItem(key));
        kosarica.push(item);
    });
    console.log(kosarica);

    const request = new XMLHttpRequest();
    request.open("post", "/cartItems/${JSON.stringify(kosarica)}");
    request.onload = () => {
        const flaskMessage = request.responseText;
        console.log(flaskMessage);
    }
    request.send();
    /*console.log(kosarica.join("\r\n"));*/
    
}

// clear local storage after sent email
function cartClear() {
    localStorage.clear();
}






//       //         QUANTITY         //        //


////////////////    v2 - radi samo za prvi element      /////////////////////

// select total count
const totalCount = document.getElementById("score");

// variable to track count
var count = 1;

// display initial count value
totalCount.innerHTML = count;

// function to increment count
const handleIncrement = () => {
    count++;
    totalCount.innerHTML = count;
}

const handleDecrement = () => {
    count--;
    totalCount.innerHTML = count;
}




////////////////    v1 - nije radilo      /////////////////////

// func to increase quantity
function increaseCounter() {

    var count = Number(document.getElementById("score"));
    count += 1;
    document.getElementById("score").innerHTML = count.toString();

    /*
    var count = Number(window.localStorage.getItem("count"));
    count += 1;
    window.localStorage.setItem("count", count);
    document.getElementById("score").innerHTML = count;
    */
}

// func to decrease quantity
function decreaseCounter() {
    var count = Number(document.getElementById("score"));
    count -= 1;
    document.getElementById("score").innerHTML = count;
}