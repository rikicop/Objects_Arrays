//1. I start without any qty
let cart = [
  { name: "shirt", price: 230 },
  { name: "shirt", price: 100 },
  { name: "shirt", price: 230 },
  { name: "pants", price: 100 },
  { name: "pants", price: 100 },
  { name: "socks", price: 20 },
];
console.log("Before Update: ", cart);

//2. Count the repeated items
// Short circuiting is used to avoid the error of undefined in the first iteration of the loop when the variable is 
//not defined yet. 
let count = {};
cart.forEach((item) => {
  // count represents the object that will be updated with the new values
  count[item.name] = (count[item.name] || 0) + 1; // count[item.name] is a possibility, if it is not defined, it will be 0
});
console.log("Count: ", count);

/* Para escribir la declaración if/else como un operador lógico OR ( || ), simplemente escribimos la línea 18 arriba,
   count[item.name] = (count[item.name] || 0). Si el count[item.name] a la izquierda del || operator es un valor "veraz",
   devolverá una respuesta count[item.name] y se le sumará 1. De lo contrario, si count[item.name] es "falso" (no se proporciona un valor),
   pasará al segundo operando, que es 0 , y lo devolverá en su lugar el 0 + 1.
 */



//3. Update the cart   
/* let newQty = [3, 5, 2, 1, 1];
var newArray = [];
newQty.forEach((_, i) => {
  cart[i].qty = newQty[i];
  newArray.push(cart[i]);
}); 

console.log("After update: ", newArray);
*/