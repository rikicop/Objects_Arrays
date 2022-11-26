let products = [
    {
        "id": 1,
        "name": "Astro",
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7,
        "stock": 5
    },
    {
        "id": 2,
        "name": "Astraa",
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5,
        "stock": 8
    },
];
let cart = [
    {
        "id": 1,
        "name": "Astro",
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7,
        "amount": 3
    },
    {
        "id": 2,
        "name": "Astraa",
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5,
        "amount": 4
    },
];




// Esto va a ocurrir dentro de la API
// Donde products va a ser el resultado de un mongo fin({})
// Cart se va a devolver como un array de objeto a travez de un put
products.forEach((item, index) => {
    if (item.id === cart[index].id) {
        console.log(item.stock - cart[index].amount);
    }
})

