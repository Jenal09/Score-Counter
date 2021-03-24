function shoppingSpree(arr) {
    return arr.reduce((curr, next) => (curr.price + next.price))
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

// every // filter // find

[2, 3, 6, 8, 10, 12]

function checkPrices(wishList){
    return wishList.every(item => item.price > 1000)
}

function checkPricesMoreThan2(wishList){
    return wishList.every(item => item.price > 2)
}


function multipleOfTwo(arr) {
    return arr.filter((num) => {
        if (num % 2 === 0)
            return num;
    });
}


const filterWishList = (myList) => {
    return myList.filter((item) => {
        if (item.price < 10000) {
            return item;
        }
    })
}

function findTitle(wishlist){
    return wishlist.find((item) => {
       if(item.title.startsWith('T')){
           return item;
       }
    })
}