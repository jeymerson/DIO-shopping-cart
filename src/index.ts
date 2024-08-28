import * as cartService from "./services/cart.js";
import { ItemModelInCar } from "./models/item-model.js";


(async function main() {

const Mycart: ItemModelInCar[] = [];
const myWhishList:ItemModelInCar[] = [];

await cartService.message();
// recuperando da base de dados 2 itens
let item1:ItemModelInCar = await cartService.createItemInCarById(1);
let item2: ItemModelInCar = await cartService.createItemInCarById(2);
let item3:ItemModelInCar = await cartService.createItemInCarById(3);
let item4: ItemModelInCar = await cartService.createItemInCarById(4);
let item5:ItemModelInCar = await cartService.createItemInCarById(5);
let item6: ItemModelInCar = await cartService.createItemInCarById(6);


// adicionado 2 tens ao carrinho
await cartService.addItem(Mycart, item1);
await cartService.addItem(Mycart, item2);
await cartService.addItem(Mycart, item3);
await cartService.addItem(Mycart, item4);
await cartService.addItem(Mycart, item5);
await cartService.addItem(Mycart, item6);

// removido os dois itens do carrinho
await cartService.deleteItem(Mycart, item2.name);
await cartService.deleteItem(Mycart, item1.name);

await cartService.removeItem(Mycart,item3);
await cartService.removeItem(Mycart,item4);
// await cartService.removeItem(Mycart,item2);

await cartService.displaycart(Mycart);

await cartService.calculateTotal(Mycart);

 })()