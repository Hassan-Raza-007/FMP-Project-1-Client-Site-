var myCart = [
    {
        id: 0,
        image: "./img/Sucess-313.jpeg",
        cartInfo: {
            name: "Sucess-313",
            price: "Rs.2000/-",
        },
        desc: "Inspired by Creed Aventus (for mens)"
    },
    {
        id: 1,
        image: "./img/Vintage-Oud.jpeg",
        cartInfo: {
            name: "Vintage-Oud",
            price: "Rs.2000/-",
        },
        desc: "Inspired by Oud (for mens)"
    },
    {
        id: 2,
        image: "./img/Dude.jpeg",
        cartInfo: {
            name: "Dude",
            price: "Rs.2000/-",
        },
        desc: "Inspired by Hugo Boss (for mens)"
    },
    {
        id: 3,
        image: "./img/Fancy-Desire.jpeg",
        cartInfo: {
            name: "Fancy-Desire",
            price: "Rs.2000/-",
        },
        desc: "Inspired by Dunhil Desire (for mens)"
    },
    {
        id: 4,
        image: "./img/Sparkly.jpeg",
        cartInfo: {
            name: "Sparkly",
            price: "Rs.2000/-",
        },
        desc: "Inspired by Libre Intense (for womens)"
    },
    {
        id: 5,
        image: "./img/Lo-Touch.jpeg",
        cartInfo: {
            name: "Lo-Touch",
            price: "Rs.2000/-",
        },
        desc: "Inspired by STILL Jennifer Lopez (for womens)"
    },

]

// ******** Items added to shop container

var cartContainer = document.getElementById("cart-container")

for (var i = 0; i < myCart.length; i++) {
    var id = myCart[i].id
    var image = myCart[i].image
    var cartinfoName = myCart[i].cartInfo.name
    var cartinfoPrice = myCart[i].cartInfo.price
    var desc = myCart[i].desc

    cartContainer.innerHTML += `
<div class="carts" id="cart1">
<img src="${image}" alt="Sucess-313">
<div class="cart-info"><span>${cartinfoName}</span> <span>${cartinfoPrice}</span></div>
<div class="desc"> <strong>${desc}</strong></div>
<button class="cart-btn" onclick="additem(${id})" ><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>`
}


// ***************** Cart Tab Section *******************//
var iconCart = document.querySelector('.icon-cart')
var closeCart = document.querySelector('.close')
var body = document.querySelector('body')

iconCart.addEventListener('click', () =>{
    body.classList.toggle('showCart')
})
closeCart.addEventListener('click',()=>{
    body.classList.toggle('showCart')

})


