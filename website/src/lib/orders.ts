import { juices } from "./data";
import { orderCreateNotifier } from "./stores";
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

    // If the order with the given juiceId already exists, the .findIndex function will return its index
    // But if it does not exist the function will return -1
    const doesOrderAlreadyExist = orders.findIndex((order) => order.juiceId == newOrder.juiceId);

    // If the order with the given juiceId already exists then don't create a new one
    if (doesOrderAlreadyExist !== -1) {
        return
    }

    // Add the new order to the list of exsiting orders
    orders.push(newOrder);

    // Update the localStorage
    localStorage['orders'] = JSON.stringify(orders);

    orderCreateNotifier.set(newOrder); // Notify the UI that a new order is created
}

export function deleteOrder(juiceId: number) {
    const orders = getOrders();

    // Get the order from the array
    const orderIndex = orders.findIndex((order) => order.juiceId == juiceId);

    // If the order exists, delete it
    if (orderIndex !== -1) {
        orders.splice(orderIndex, 1); // Remove the order

        // Update the localStorage
        localStorage['orders'] = JSON.stringify(orders);
    }

    return orders;
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

    return orders;
}
