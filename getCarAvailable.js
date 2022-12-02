let parts = [
    { "id": "1c", "color": "purple", "type": "door", "stock": 6 }, { "id": "2d", "color": "red", "type": "battery", "stock": 5 },
    { "id": "b3", "color": "yellow", "type": "mirror", "stock": 66 }, { "id": "4f", "color": "black", "type": "engine", "stock": 3 },
    { "id": "a5", "color": "white", "type": "tire", "stock": 55 }, { "id": "6g", "color": "blue", "type": "wheel", "stock": 27 },
]

//let result = []
//AUTOS FOUNDED
let engine = false
let door = false
console.log("AUTOS FOUNDED")
parts.forEach(ele => {
    if (ele.type === "engine" && ele.stock > 1) {
        engine = true
        console.log("Hay Sufientes motores")
    } if (ele.type === "door" && ele.stock > 1 && (ele.stock % 2) == 0) {
        door = true
        console.log(`Hay Sufientes pares de puertas para un carro y son ${ele.stock / 2}`)
    }
});

if (door === true && engine === true) {
    console.log("Si hay un carro habilitado")
}

// Como saber cuantos carros puedo hacer o hay disponibles?
// si tienes 3 pares de puertas 1 y un solo motor el que domina es el motor por que es de
// menor valor y descarta las demas.