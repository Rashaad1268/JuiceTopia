import { juices } from "./data";
import type { JuiceOrderInterface } from "./types";


export function getOrders(): Array<JuiceOrderInterface> {
    /*
        A function which returns all of the orders
    */

    const ordersJson: string | undefined = localStorage['orders'];

    if (ordersJson !== undefined) {
        try {
            // Invalid JSON has been set
            return JSON.parse(ordersJson);
        } catch (error) {
            // In case of invalid JSON

            console.error(error); // Log error to the console

            // Remove the invalid JSON
            localStorage.removeItem('orders');

            return [];
        }
        
    }

    return [];
}

export function getJuiceFromId(juiceId: number) {
    /*
        A function which gets the details of juice of the given juiceId
    */

    // Search the juices array for the juice with the given id
    const juice = juices.find((juice) => juice.id === juiceId); 

    if (juice !== undefined) {
        return juice; // Return the juice if it was found
    } else {
        // An invalid id was supplied, therefore the juice was not found
        // Raise an error indicating that the given id was invalid
        throw Error(`Invalid juice id provided (id: ${juiceId})`)
    }
}

export function createOrder(newOrder: JuiceOrderInterface) {
    const orders = getOrders(); // Get the existing orders of the user

    // Add the new order to the list of exsiting orders
    orders.push(newOrder);
    console.log('orders', newOrder)

    // Update the localStorage
    localStorage['orders'] = JSON.stringify(orders);
}

export function updateOrderQuantity(juiceId: number, newQuantity: number) {
    const orders = getOrders(); // Get the existing orders of the user

    // Find the index of the order, so we can update its quantity
    const orderIndex = orders.findIndex((order) => order.juiceId === juiceId);

    // Make sure the index is not -1, since -1 means it was not found in the array
    if (orderIndex !== -1) {
        orders[orderIndex].quantity = newQuantity; // Update the quantity of the order

        // Update the localStorage
        localStorage['orders'] = JSON.stringify(orders);
    }
}
