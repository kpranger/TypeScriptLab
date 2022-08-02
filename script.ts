export{}
// #1
interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [{name: "Kilimanjaro", height: 19341}, {name: "Everest", height: 29029}, {name: "Denali", height: 20310}]

function findNameOfTallestMountain(mountains:Mountain[]):string{
    let highestMountain: Mountain = mountains[0];
    mountains.forEach((m:Mountain) => {
        if(m.height > highestMountain.height){
            highestMountain = m;
        }
    })
    return highestMountain.name;
}
console.log(findNameOfTallestMountain(mountains));


// #2
interface Product {
    name: string;
    price: number;
}

let products: Product[] = [{name: "TV", price: 1000}, {name: "PS5", price: 600}, {name: "HDMI Cable", price: 25}]

function calcAverageProductPrice(products: Product[]):number{
    let totalCost = 0;
    for (let i: number = 0; i < products.length; i++){
        totalCost += products[i].price;
    }
    let total = totalCost / products.length;
    return total;
}
console.log(calcAverageProductPrice(products))


// #3
interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem []= [{product: {name: "motor", price: 10.00}, quantity: 10}, {product: {name: "sensor", price: 12.50}, quantity: 4}, {product: {name: "LED", price: 1.00}, quantity: 20}]

function calcInventoryValue (inventory: InventoryItem[]):number{
    let totalCost = 0;
    for (let i: number = 0; i < inventory.length; i++){
        totalCost += inventory[i].product.price * inventory[i].quantity;
    }
    return totalCost;
}
console.log(calcInventoryValue(inventory))