<script lang="ts">
  import OrdersTable from "./ordersTable.svelte";
  import { getJuiceFromId, getOrders, deleteOrder } from "../lib/orders";
  import { orderCreateNotifier } from "../lib/stores";

  let orders = getOrders();

  orderCreateNotifier.subscribe((newOrder) => {
    if (Boolean(newOrder)) {
      // If the newOrder is a truthy value, add it to the list of orders
      orders = [newOrder!, ...orders];
    }
  });

  function removeOrder(juiceId: number) {
    orders = deleteOrder(juiceId);
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
  <OrdersTable bind:orders deleteOrder={removeOrder} />
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
