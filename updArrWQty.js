// Data Resume : 2 Doors, 3 Engines, 1 Tire
const data = [
    {
        id: "1",
        name: "Door",
        price: 100
    },
    {
        id: "2",
        name: "Door",
        price: 100
    },
    {
        id: "3",
        name: "Tire",
        price: 120
    },
    {
        id: "4",
        name: "Engine",
        price: 200
    },
    {
        id: "5",
        name: "Engine",
        price: 200
    },
    {
        id: "6",
        name: "Engine",
        price: 200
    },
]
// 1. Original Array
console.log("Original Array: ", data)
// 2. Count the number of items in the array
let count = {};
data.forEach((item) => {
    count[item.name] = (count[item.name] || 0) + 1; // This kind of syntax is called a "short-circuit" operator
    // (count[item.name] || 0) is used just as a way to check if count[item.name] is undefined or not
    // if it is undefined, then it will be set to 0 and then 1 will be added to it
});
console.log("Count: ", count)

// 3. Create a cart array
let cartArray = [];
// {Life: 4, Nature: 1, Science: 2}
for (let name in count) {
    cartArray.push({ name: name, count: count[name], amount: count[name] * data.find(product => product.name === name).price })
}
console.log("Cart: ", cartArray)

//TOTAL
let total = 0;
cartArray.forEach(product => total += product.amount)
console.log("Total: ", total)

//Result:
// Count:  { Door: 2, Tire: 1, Engine: 3 }
// New Array:  [ { name: 'Door', count: 2, amount: 200 }, { name: 'Tire', count: 1, amount: 120 }, { name: 'Engine', count: 3, amount: 600 } ]
// Total:  920