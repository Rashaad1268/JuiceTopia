<script lang="ts">
  import { getJuiceFromId } from "../lib/orders";
  import type { JuiceOrderInterface } from "../lib/types";

  export let orders: Array<JuiceOrderInterface>;
  export let deleteOrder: (arg0: number) => void;
  export let updateOrderQuantity: (
    juiceId: number,
    newQuantity: number
  ) => void;
</script>

<div class="rounded-md overflow-x-scroll">
  <table class="w-full rounded-md">
    <thead class="text-xs uppercase bg-neutral-800 text-gray-400">
      <tr>
        <th>Juice Name</th>
        <!-- Hide the price column if the table cell is too small -->
        <th>Price (Rs)</th>
        <th>Quantity</th>
        <th>Total (Rs)</th>
        <th />
      </tr>
    </thead>
    <tbody class="text-center">
      {#each orders as order (order.juiceId)}
        {@const juice = getJuiceFromId(order.juiceId)}
        <tr class="body-cell">
          <th class="px-6 py-4 font-medium whitespace-nowrap text-white">
            {juice.name}
          </th>
          <!-- Hide the price column if the table cell is too small -->
          <td class="">{juice.price}</td>
          <td>{order.quantity}</td>
          <td>{juice.price * order.quantity}</td>
          <td class=""
            ><button
              aria-label="Delete order"
              class="p-1"
              on:click={() => deleteOrder(order.juiceId)}
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 fill-red-600"
                viewBox="0 0 448 512"
                ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                /></svg
              ></button
            ></td
          >
        </tr>
      {/each}

      {#if orders.length !== 0}
        <!-- If the number of orders are larger than 0, show the subtotal price -->
        <tr class="body-cell">
          <td />
          <td class="" />
          <td class="font-medium text-white">Subtotal</td>
          <td class="whitespace-nowrap">
            Rs. {orders
              .map(
                (order) => getJuiceFromId(order.juiceId).price * order.quantity
              )
              .reduce((a, b) => a + b, 0)}</td
          >
          <td /></tr
        >
      {/if}
    </tbody>
  </table>

  {#if orders.length === 0}
    <h3 class="font-bold text-xl p-4 text-center">
      You have not ordered any drinks
    </h3>
  {/if}
</div>

<style lang="postcss">
  th {
    @apply px-2 sm:px-6 py-3;
  }

  td {
    @apply px-2 sm:px-6 py-4;
  }

  .body-cell {
    @apply border-b bg-neutral-700 border-neutral-600;
  }
</style>
