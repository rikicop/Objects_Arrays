let cart = [
    { "id": "a5", "color": "white", "type": "sport", "amount": 7 },
    { "id": "b3", "color": "yellow", "type": "pickup", "amount": 8 },
]

let autos = [
    { "id": "1c", "color": "purple", "type": "minivan", "stock": 7 }, { "id": "2d", "color": "red", "type": "station_wagon", "stock": 5 },
    { "id": "b3", "color": "yellow", "type": "pickup", "stock": 66 }, { "id": "4f", "color": "black", "type": "sedan", "stock": 3 },
    { "id": "a5", "color": "white", "type": "sport", "stock": 55 }, { "id": "6g", "color": "blue", "type": "race", "stock": 27 },
    { "id": "7h", "color": "aqua", "type": "taxi", "stock": 9 }
]

//STOCKS DE CARTS
console.log("STOCKS DE CARTS")
autos.forEach(ele => {
    let value = cart.find(val => val.id === ele.id);
    if (value) {
        console.log(value, value.amount)
    }
});

let result = []
//STOCKS DE AUTOS
console.log("STOCKS DE AUTOS")
cart.forEach(ele => {
    let value = autos.find(val => val.id === ele.id);
    if (value) {
        result.push({ "id": value.id, "total": value.stock - ele.amount })
    }
});

console.log("result: ", result)
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