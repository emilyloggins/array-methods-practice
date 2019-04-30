
const outputDiv = document.querySelector("#output");

businesses.filter(biz => biz.addressStateCode === "NY")
    .forEach(business => {
        // console.log("The businesses:", business)
        outputDiv.innerHTML += 
        `<h2>${business.companyName}</h2>
        <address>${business.addressStateCode}</address>
        <hr>`
});

function showBusiness(business){
    return `<div>${business.companyName}</div>`
}

let newStuff = businesses.map(showBusiness);
outputDiv.innerHTML += newStuff.join("");
console.log("new array using 'map'", newStuff);

// CANDIES ///////////////////////////
const candies = [
    {
        name: "Lollipop",
        price: 2.99
    },
    {
        name: "Tootsie Roll",
        price: 1.49
    },
    {
        name: "Sugar Daddy",
        price: 2.49
    }
]

const firstCheapCandy = candies.find(candy => candy.price < 2.00)

console.log(firstCheapCandy)

// REDUCE() ///////////////////

const numbers= [1, 2, 3, 6, -2];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("SUM", sum);

// PRACTICE: BIG SPENDERS //////////////////////

// const bigSpenders = businesses.filter(business => business.orders > 9000) 
console.log(businesses)

const words = ["hey", "hi", "go", "home", "mom", "dad", "love"]

const result = words.filter(word => word.length > 0 && word.length < 3);
console.log(result);