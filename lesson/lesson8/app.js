const menuNames = ['Hot Dishes',
    'Cold Dishes',
    'Soup', 'Grill',
    'Appetizer',
    'Dessert']
const foods = [
    {
        "img": "./image/img.png",
        "name": "Spicy seasoned seafood noodles",
        "price": "$ 2.29",
        "bowls": 20,
        "available": true
    },
    {
        "img": "./image/img_1.png",
        "name": "Salted Pasta with mushroom sauce",
        "price": "$ 2.69",
        "bowls": 11,
        "available": true
    },
    {
        "img": "./image/img.png",
        "name": "Spicy seasoned seafood noodles",
        "price": "$ 2.29",
        "bowls": 20,
        "available": true
    },
    {
        "img": "./image/img_1.png",
        "name": "Salted Pasta with mushroom sauce",
        "price": "$ 2.69",
        "bowls": 11,
        "available": true
    },
    {
        "img": "./image/img.png",
        "name": "Spicy seasoned seafood noodles",
        "price": "$ 2.29",
        "bowls": 20,
        "available": true
    },
    {
        "img": "./image/img_1.png",
        "name": "Salted Pasta with mushroom sauce",
        "price": "$ 2.69",
        "bowls": 11,
        "available": true
    },
    {
        "img": "./image/img.png",
        "name": "Spicy seasoned seafood noodles",
        "price": "$ 2.29",
        "bowls": 20,
        "available": true
    },
    {
        "img": "./image/img_1.png",
        "name": "Salted Pasta with mushroom sauce",
        "price": "$ 2.69",
        "bowls": 11,
        "available": true
    },
];
// DOM
const header_nav = document.querySelector('.header-nav')
const menu_cards = document.querySelector('.menu-cards');

function renderMenuButtons (index=0){
    header_nav.innerHTML = menuNames.map( (el,i) => {
        let clas=index===i ?'active':""
        return `<h5 class="${clas}"> ${el} </h5>`
    }).join('')

    header_nav.querySelectorAll('h5').forEach( (h5,idx) => {
        h5.addEventListener('click',(e)=>{
            renderMenuButtons(idx);
        })
    })
}
function renderMenuCard() {
    menu_cards.innerHTML = foods.map((food, i) => {
        return `
            <div class="card">
                <div class="card-img">
                    <img src="${food.img}" alt="">
                    <div class="cart-icon">
                        🛒
                    </div>
                </div>
                <div class="card-info">
                    <h5> ${food.name}</h5>
                    <p>${food.price}</p>
                    <p>${food.bowls} Bowls available</p>
                </div>
            </div>`
    }).join('')
}

renderMenuCard()
renderMenuButtons()
