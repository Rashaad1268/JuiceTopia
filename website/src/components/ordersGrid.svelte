<script lang="ts">
    // import browser from "env"
    import {getJuiceFromId, getOrders} from "../lib/orders";

    // Make sure the code is running on the client instead of the server
    // $: isBrowser = typeof window !== 'undefined';
</script>

{#each getOrders() as order (order.juiceId)}
    {getJuiceFromId(order.juiceId)}
{/each}