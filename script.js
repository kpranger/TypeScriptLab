"use strict";
exports.__esModule = true;
var mountains = [{ name: "Kilimanjaro", height: 19341 }, { name: "Everest", height: 29029 }, { name: "Denali", height: 20310 }];
function findNameOfTallestMountain(mountains) {
    var highestMountain = mountains[0];
    mountains.forEach(function (m) {
        if (m.height > highestMountain.height) {
            highestMountain = m;
        }
    });
    return highestMountain.name;
}
console.log(findNameOfTallestMountain(mountains));
var products = [{ name: "TV", price: 1000 }, { name: "PS5", price: 600 }, { name: "HDMI Cable", price: 25 }];
function calcAverageProductPrice(products) {
    var totalCost = 0;
    for (var i = 0; i < products.length; i++) {
        totalCost += products[i].price;
    }
    var total = totalCost / products.length;
    return total;
}
console.log(calcAverageProductPrice(products));
var inventory = [{ product: { name: "motor", price: 10.00 }, quantity: 10 }, { product: { name: "sensor", price: 12.50 }, quantity: 4 }, { product: { name: "LED", price: 1.00 }, quantity: 20 }];
function calcInventoryValue(inventory) {
    var totalCost = 0;
    for (var i = 0; i < inventory.length; i++) {
        totalCost += inventory[i].product.price * inventory[i].quantity;
    }
    return totalCost;
}
console.log(calcInventoryValue(inventory));
