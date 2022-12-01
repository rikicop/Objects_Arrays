let products = [
    {
        "id": 1,
        "name": "Astro",
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7,
        "stock": 5,
        "amount": 23
    },
    {
        "id": 2,
        "name": "Astraa",
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5,
        "stock": 38,
        "amount": 23
    },
    {
        "id": 5,
        "name": "Rocket",
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5,
        "stock": 11,
        "amount": 23
    },
    {
        "id": 7,
        "name": "Wings",
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5,
        "stock": 91,
        "amount": 23
    },
    {
        "id": 17,
        "name": "Elthon",
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5,
        "stock": 51,
        "amount": 23
    },
];
let cart = [

    {
        "id": 7,
        "name": "Wings",
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5,
        "stock": 4,
    },
    {
        "id": 2,
        "name": "Astraa",
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5,
        "stock": 8,
    },
];




// Esto va a ocurrir dentro de la API
// Donde products va a ser el resultado de un mongo fin({})
// Cart se va a devolver como un array de objeto a travez de un put
//shortProducts = products.filter(() => {  })

/* 
products.forEach((item, index) => {
    if (item.id === cart[index].id) {
        console.log(item.stock - cart[index].amount);
    }
}) */




//FIND
const array1 = [5, 12, 8, 130, 44, 32, 88, 32, 64, 45, 11, 89, 10, 66, 72, 63, 9, 1, 100, 201];
const array2 = [88, 1]





/* array2.forEach((item, index, array1) => {
    if (item === array1[index]) {
        console.log(item)
    }
}); */
//const found = array1.find(element => element > 10);
//console.log(found);


//STOCK

/*  cart.forEach((item, index, products) => {
    if (item.id === products[index].id) {
        console.log(item.stock, products.stock)
    }
}) */

/* cart.forEach((item, index) => {
    if (item.id === products[index].id) {
        console.log(item.stock, products.stock)
    }
}
) */


/* var n = [1, 2, 3, 5, 7, 8, 9];
var m = [3, 8];

m.forEach((num1, index) => {
    const num2 = m[index];
    if (num1 === num2) {
        console.log(m[index])
    }

}); */


var a = [1, 2, 3, 5];
var b = [1, 2, 3, 5];

for (var i = 0; i < a.length; i++)
    if (a[i] != b[i])
        return "False";
return "True";