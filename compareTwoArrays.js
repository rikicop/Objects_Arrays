let cart = [
    { "id": 5, "color": "white", "type": "sport", "stock": 7 },
    { "id": 3, "color": "yellow", "type": "pickup", "stock": 8 },
]

let autos = [
    { "id": 1, "color": "purple", "type": "minivan", "stock": 7 }, { "id": 2, "color": "red", "type": "station_wagon", "stock": 5 },
    { "id": 3, "color": "yellow", "type": "pickup", "stock": 66 }, { "id": 4, "color": "black", "type": "sedan", "stock": 3 },
    { "id": 5, "color": "white", "type": "sport", "stock": 55 }, { "id": 6, "color": "blue", "type": "race", "stock": 27 },
    { "id": 7, "color": "aqua", "type": "taxi", "stock": 9 }
]

//STOCKS DE CARTS
console.log("STOCKS DE CARTS")
autos.forEach(ele => {
    let value = cart.find(val => val.id === ele.id);
    if (value) {
        console.log(value)
    }
});

//STOCKS DE AUTOS
console.log("STOCKS DE AUTOS")
cart.forEach(ele => {
    let value = autos.find(val => val.id === ele.id);
    if (value) {
        console.log(value)
    }
});


/* autos.forEach((item, index) => {
    if (cart[index] === undefined) {
        cart[index] = {
            "id": 0,
            "color": "no",
            "type": "no",
            "stock": 0
        }
        console.log(item.type, cart[index]);
    }
});

console.log(cart, autos) */

/* let coches = [55, 73, 82, 66, 48];
let carrito = [73, 66] */