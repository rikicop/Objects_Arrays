const data = [
    {
        id: "1",
        name: "Life"
    },
    {
        id: "2",
        name: "Nature"
    },
    {
        id: "ert",
        name: "Science"
    },
    {
        id: "hola",
        name: "Life"
    },
    {
        id: "alegre",
        name: "Life"
    },
    {
        name: "Science",
        id: "5luZZfK"
    },
    {
        name: "Life",
        id: "_ckGaE7"
    }
]

let count = {};
data.forEach((item) => {
    count[item.name] = (count[item.name] || 0) + 1;
});
console.log("Count: ", count)
//from this -> {Life: 4, Nature: 1, Science: 2}
/*  to this: 
   [
    {name: "Life", count: 4, textSize: count + 1}, 
    {name: "Nature", count: 1, textSize: count + 1}, 
    {name: "Science", count: 2, textSize: count + 1}
   ]
*/
let sortedArray = [];
// {Life: 4, Nature: 1, Science: 2}
for (let name in count) {
    sortedArray.push({ name: name, count: count[name], textSize: count[name] + 5 })
}
console.log("New Array: ", sortedArray)

