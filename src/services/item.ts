// CASOS DE USO DOS ITENS

import * as itemModel from "../models/item-model";

// -> criar item com subtotal  certo
export const createItem = async( id:number, name:string, price:number, quantity:number): Promise<itemModel.ItemModelInCar> => {
    return {
        id,
        name,
        price,
        quantity,
        subtotal:  price * quantity,
  }
}
