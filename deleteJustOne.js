products = [
    {
        "id": 1,
        "name": "Door",
        "imageUrl": "foo1.jpg",
        "price": 400
    },
    {
        "id": 1,
        "name": "Door",
        "imageUrl": "foo1.jpg",
        "price": 400
    },
    {
        "id": 1,
        "name": "Door",
        "imageUrl": "foo1.jpg",
        "price": 400
    },
    {
        "id": 2,
        "name": "Engine",
        "imageUrl": "foo2.jpg",
        "price": 100
    },
    {
        "id": 2,
        "name": "Engine",
        "imageUrl": "foo2.jpg",
        "price": 100
    }
]

// Result: 3 Doors and 2 Engines

// Delete one item from the array given the id
const deleteJustOne = (products, id) => {
    const index = products.findIndex(item => item.id === id);
    if (index > -1) {
        products.splice(index, 1);
    }
    return products;
}

console.log("Deleted just one: ", deleteJustOne(products, 2));