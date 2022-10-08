//Este codigo reemplaza qty por las del arreglo qty
let cart = [
  { name: "shirt", price: 230, qty: 0 },
  { name: "pants", price: 100, qty: 0 },
];
console.log("Before Update: ", cart);
let newQty = [3, 5];

var newArray = [];

newQty.forEach((_, i) => {
  cart[i].qty = newQty[i];
  newArray.push(cart[i]);
});

console.log("After update: ", newArray);
