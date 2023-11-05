<script lang="ts">
  import { createOrder } from "../lib/orders";
  import type { JuiceInterface } from "../lib/types";

  export let juice: JuiceInterface;
  export let onClick: Function = () => {};
</script>

<a href="/#orders" class="contents"
  ><button
    on:click={(event) => {
      event.stopPropagation();

      // Create a new order when the button is click
      createOrder({ quantity: 1, juiceId: juice.id });

      // Call the onClick callback function which is passed in
      onClick();
    }}
    class="{$$restProps.class || ''} juice-buy-btn"
    style="--btn-color: {juice.color};">Buy</button
  ></a
>

<style lang="postcss">
  /* Styling the button */
  .juice-buy-btn {
    @apply font-semibold capitalize border
           w-auto text-lg rounded-lg 
           h-9 px-10 py-2 flex select-none
           items-center justify-center focus:outline-none;
    background-color: var(--btn-color);
    border: none;
    color: white;

    transition: background-color 0.17s ease, color 0.17s ease;
  }

  @media (hover: hover) {
    /* If the device supports hovering elements, add an extra effect to the button */
    .juice-buy-btn {
      color: var(--btn-color);
      background-color: transparent;
      border: 1px solid var(--btn-color);
    }

    .juice-buy-btn:hover {
      background-color: var(--btn-color);
      color: white;
    }
  }
</style>
