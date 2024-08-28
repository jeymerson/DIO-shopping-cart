// quais ações meu carrinho pode fazer

import { ItemModelInCar } from "../models/item-model";
import {createItem} from "./item";
import { findItemById } from "../repositories/item-repositorys";

//casos de uso 
//  ✔-> adicionar item no carrinho
export const addItem = async (userCart:ItemModelInCar[], item:ItemModelInCar) => {
    userCart.push(item);
}
//  -> calcular o total
export const calculateTotal = async (userCart: ItemModelInCar[]) => {
    console.log("\nShopee Cart TOTAL IS:");
    const result = userCart.reduce((total, item) => total + item.subtotal,0);
    console.log(`🎁Total: ${result}`);
   
}

export const deleteItemByName = async (userCart: ItemModelInCar[], name:string) => {
        const index = userCart.findIndex((item)=> item.name === name);
        if(index !== -1) {
            userCart.splice(index,1);
            console.log(`Item ${name} removido!`)
        } else {
            console.log(`Item ${name} não encontrado!!`)
        }
    
}
export const deleteItemByID = async (userCart: ItemModelInCar[], id:number) => {
    const index = userCart.findIndex((item)=> item.id === id);
    if(index !== -1) {
        userCart.splice(index,1);
        console.log(`Item removido!`)
    } else {
        console.log(`Item não encontrado!!`)
    }

}
export const deleteItem = async (userCart: ItemModelInCar[], name:string) => {
        const index = userCart.findIndex((item)=> item.name === name);
        if(index !== -1) {
            userCart.splice(index,1)
        }
}

//buscar o item pelo id e o transforma em item de carrinho

export const createItemInCarById = async (id:number): Promise<ItemModelInCar> => {
    let item = await findItemById(id)
    return await createItem(item.id, item.name, item.price, item.quantity)
}


//  -> ✔remover um item diminui um item
export const removeItem = async (userCart: ItemModelInCar[],itemInCar: ItemModelInCar) => {
    
    // o indice do item 
    const indexFound = userCart.findIndex((item:ItemModelInCar) => item.name === itemInCar.name);
    // caso não encontro o item
    if (indexFound === -1) {
        console.log("Item não encontrado!")
        return;
    }

    // item maior que 1 subtrair um item, item = 1 deletar o item
    // verifica o item do carro no index pela quantidade
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    // caso item 1
    if (userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound,1);
        return;
    }

}



export const displaycart = async (userCart:ItemModelInCar[]) => {
    console.log("\nShopee cart list: ");
    userCart.forEach((item, index ) => {
    console.log(`${index+1}. ${item.name} - price R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal}`);
    });
    
}


export const message = async () => console.log("Welcome to the your Shopee Cart!");