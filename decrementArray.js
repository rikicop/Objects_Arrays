data = [
    {
        "name": "Door",
        "imageUrl": "foo1.jpg",
        "count": 2,
        "price": 400,
        "amount": 800
    },
    {
        "name": "Engine",
        "imageUrl": "foo2.jpg",
        "count": 1,
        "price": 50,
        "amount": 100
    }
]
// Subtract by 1 from the count given the name
const decrementArray = (data, name) => {
    const index = data.findIndex(item => item.name === name);
    console.log("index: ", index);
    if (index > -1) {
        data[index].count -= 1;
        data[index].amount = data[index].price * data[index].count;
    }
    return data;
}

// Remove the item from the array given the name
const removeItem = (data, name) => {
    const index = data.findIndex(item => item.name === name);
    if (index > -1) {
        data.splice(index, 1);
    }
    return data;
}

console.log("Decrementado (1 Solo Producto): ", decrementArray(data, 'Door'));
console.log("Eliminado totalmente: ", removeItem(data, 'Door'));

