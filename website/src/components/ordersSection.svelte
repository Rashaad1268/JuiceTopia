<script lang="ts">
  import OrdersTable from "./ordersTable.svelte";
  import { getOrders, deleteOrder, updateOrderQuantity } from "../lib/orders";
  import { orderCreateNotifier } from "../lib/stores";
  import type { JuiceOrderInterface } from "../lib/types";

  let orders = getOrders();

  function sortOrders(array: Array<JuiceOrderInterface>) {
    // Sort the orders by juiceId, in descending order
    return array.sort((a: any, b: any) => b.juiceId - a.juiceId);
  }

  orderCreateNotifier.subscribe((newOrder) => {
    if (Boolean(newOrder)) {
      // If the newOrder is a truthy value, add it to the list of orders
      // Sort the orders by the juiceId
      orders = sortOrders([newOrder!, ...orders]);
    }
  });

  function removeOrder(juiceId: number) {
    orders = sortOrders(deleteOrder(juiceId));
  }

  function changeOrderQuantity(juiceId: number, newQuantity: number) {
    // Make sure that the quantity is not negative
    const updatedQuantity = newQuantity > 0 ? newQuantity : 1;

    orders = sortOrders(updateOrderQuantity(juiceId, updatedQuantity));
  }
</script>

<button
  class="delete-orders-btn mb-4"
  on:click={() => {
    // Delete all of the orders
    localStorage.removeItem("orders");
    orders = [];
  }}>Delete all orders</button
>

<div class="orders-grid">
  <OrdersTable bind:orders {removeOrder} {changeOrderQuantity} />
</div>

<style lang="postcss">
  .orders-grid {
    @apply flex flex-col;
  }

  .delete-orders-btn {
    @apply font-semibold capitalize
      bg-red-600 text-xs rounded-md
        h-9 px-4 py-2 hover:bg-red-700 active:bg-red-800
        flex items-center justify-center select-none;

    transition: background-color 0.17s ease, color 0.17s ease;
  }
</style>
