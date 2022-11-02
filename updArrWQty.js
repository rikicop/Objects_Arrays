// 2 Doors, 3 Engines, 1 Tire
const data = [
    {
        id: "1",
        name: "Door"
    },
    {
        id: "2",
        name: "Door"
    },
    {
        id: "3",
        name: "Tire"
    },
    {
        id: "4",
        name: "Engine"
    },
    {
        id: "5",
        name: "Engine"
    },
    {
        id: "6",
        name: "Engine"
    },
]
console.log("Original Array: ", data)
let count = {};
data.forEach((item) => {
    count[item.name] = (count[item.name] || 0) + 1; // This kind of syntax is called a "short-circuit" operator
    // (count[item.name] || 0) is used just as a way to check if count[item.name] is undefined or not
    // if it is undefined, then it will be set to 0 and then 1 will be added to it
});
console.log("Count: ", count)

let sortedArray = [];
// {Life: 4, Nature: 1, Science: 2}
for (let name in count) {
    sortedArray.push({ name: name, count: count[name] })
}
console.log("New Array: ", sortedArray)

//Result:
// Count:  { Door: 2, Tire: 1, Engine: 3 }
// New Array:  [ { name: 'Door', count: 2 }, { name: 'Tire', count: 1 }, { name: 'Engine', count: 3 } ]