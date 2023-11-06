/*
    This file contains type definitions for juices and orders
*/

export interface JuiceInterface {
    id: number;
    name: string;
    description: string;
    color: string;
    image: string;
    price: number;
}


export interface JuiceOrderInterface {
    juiceId: number;    // Reference the juice from its id property
    quantity: number;
}
