<script lang="ts">
  import { juices } from "../lib/data";
  import JuiceDialog from "./juiceDialog.svelte";
  import type { JuiceInterface } from "../lib/types";
  import JuiceBuyButton from "./juiceBuyButton.svelte";

  function trimText(text: string) {
    /* Trims down text to the first 57 characters */
    return text.substring(0, 57) + "...";
  }

  let selectedJuice: JuiceInterface = juices[0];
  let isJuiceDialogOpen = false;
</script>

<div class="juice-menu-grid">
  {#each juices as juice (juice.id)}
    <button
      class="juice-card"
      on:click={() => {
        selectedJuice = juice;
        isJuiceDialogOpen = true;
      }}
    >
      <img class="juice-image" src={juice.image} alt={juice.name} />
      <h3 class="text-xl mt-3 mb-4 font-medium" style=";">
        {juice.name}
      </h3>
      <p class="max-w-[80%] max-h-[48px] text-left overflow-y-hidden mb-4">
        {trimText(juice.description)}
      </p>

      <div class="flex justify-around items-center w-full">
        <span class="font-bold">Rs. {juice.price}</span>
        <JuiceBuyButton juice={juice} />
      </div>
    </button>
  {/each}
</div>

<JuiceDialog bind:juice={selectedJuice} bind:isOpen={isJuiceDialogOpen} />

<style lang="postcss">
  .juice-menu-grid {
    @apply grid gap-8 gap-x-6 md:gap-x-14 overflow-y-auto justify-center;
    max-width: 100%;

    grid-template-columns: repeat(auto-fit, minmax(260px, 300px));
  }

  .juice-card {
    @apply bg-neutral-950 flex flex-col items-center
                rounded-xl p-[6px] pb-6 hover:cursor-pointer;
  }

  .juice-image {
    @apply w-max aspect-square object-cover rounded-xl;
  }
</style>
