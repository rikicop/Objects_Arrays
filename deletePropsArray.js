//Este codigo reemplaza qty por las del arreglo qty
let cart = [
  { id: 1, name: "shirt", price: 30, qty: 6 },
  { id: 2, name: "shirt", price: 30, qty: 6 },
  { id: 4, name: "shirt", price: 30, qty: 6 },
  { id: 6, name: "pants", price: 50, qty: 5 },
  { id: 7, name: "pants", price: 50, qty: 5 },
  { id: 9, name: "pants", price: 50, qty: 5 },
  { id: 8, name: "shoes", price: 90, qty: 1 },
  { id: 3, name: "shoes", price: 90, qty: 1 },
];

let deletedFiltered = cart.filter((element) => element.name !== "shirt");
console.log("deletedFiltered: ", deletedFiltered);

let filterArr = cart.filter((element) => element.name === "shirt");
console.log("filterArr: ", filterArr);
deletedOne = filterArr.filter((_, index) => index < filterArr.length - 1);
console.log("deletedOne: ", deletedOne);

const result = [...deletedFiltered, ...deletedOne];

console.log("Result: ", result);
