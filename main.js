
const outputDiv = document.querySelector("#output");

businesses.filter(biz => biz.addressStateCode === "NY")
    .forEach(business => {
        // console.log("The businesses:", business)
        outputDiv.innerHTML +=
            `<h2>${business.companyName}</h2>
        <address>${business.addressStateCode}</address>
        <hr>`
    });

function showBusiness(business) {
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

const numbers = [1, 2, 3, 6, -2];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("SUM", sum);

// PRACTICE: BIG SPENDERS //////////////////////

// Array to contain all the big spenders

bigSpenders = [];

const filterFunction = function(order) {
    if (order >= 9000) {
        bigSpenders.push(order)
    } else {
        order === false;
    }
}

const arrayFinder = businesses.filter(business => {
    const allOrders = business.orders;
    allOrders.forEach(order => filterFunction(order))
});

console.log(bigSpenders)

// LIGHTENING EXERCISE /////////////////////////
// Write a function that will accept any string and return the number of vowels. Start with simple console logs.

const string = "I pledge of allegiance to the flag";

function vowelCount(str) {
    var m = str.match(/[aeiou]/gi);
    console.log(m)
}

vowelCount(string);
