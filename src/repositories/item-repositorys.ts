import { ItemModel } from "../models/item-model"

const database: ItemModel[] = [
    {  
      id: 1,
      name: "hotwheels ferrari",
      price: 20.99,
      quantity: 1,
    },
    {  
      id: 2,
      name: "hotwheels lamborghini",
      price: 39.99,
      quantity: 1,
    },
    {
      id: 3,
      name: "hotwheels porsche",
      price: 29.99,
      quantity: 1,
    },
    {
      id: 4,
      name: "hotwheels mustang",
      price: 15.99,
      quantity: 1,
    },
    {
      id: 5,
      name: "hotwheels camaro",
      price: 25.49,
      quantity: 1,
    },
    {
      id: 6,
      name: "hotwheels bugatti",
      price: 49.99,
      quantity: 1,
    },
    {
      id: 7,
      name: "hotwheels tesla",
      price: 19.99,
      quantity: 1,
    },
    {
      id: 8,
      name: "hotwheels aston martin",
      price: 35.99,
      quantity: 1,
    },
    {
      id: 9,
      name: "hotwheels dodge charger",
      price: 22.99,
      quantity: 1,
    },
    {
      id: 10,
      name: "hotwheels corvette",
      price: 27.99,
      quantity: 1,
    },
  ];
  export const findAllItems = async (): Promise <ItemModel[]> => {
    return database;
}

export const findItemById = async (id:number): Promise <ItemModel> => {
    let data = database.find(item => item.id === id);
    if(data === undefined) {
      return {
        id: 0,
        name: "undefined",
        price: 0,
        quantity: 0,
      }
    }
    return data;
}

export const insertItem = async (item: ItemModel) => {
  database.push(item);
}

export const deleteOneItem = async (id:number) => {
  const index = database.findIndex(item => item.id === id);
  if(index !== -1) {
    database.splice(index,1);
    return true
  } 
  return false
}
export const findAndModifyItem = async (
  id:number, 
  item: ItemModel
): Promise <ItemModel> => {
  const itemIndex = database.findIndex (item => item.id === id);
  if (itemIndex !== -1) {
    database[itemIndex] = item;
  }


  return database[itemIndex]

}