<script lang="ts">
  import type { JuiceInterface } from "../lib/types";
  import JuiceBuyButton from "./juiceBuyButton.svelte";

  export let isOpen: boolean = false;
  export let juice: JuiceInterface;

  let dialog: HTMLDialogElement | undefined;
  let dialogContent: HTMLDivElement | undefined;

  function handleClick(event: MouseEvent) {
    // First check that the dialog content does not contiain the click
    if (!dialogContent?.contains(event.target as HTMLElement)) {
      // Then check if the dialog is open AND if closeOnOutsideClick is true
      if (isOpen) {
        // Then check if the dialog overlay was clicked
        /* We need this extra statement because without this
			 it'll also close button that was supposed to open the dialog in the first place */
        if (dialog?.contains(event.target as HTMLElement)) {
          isOpen = false;
        }
      }
    }
  }
  function closeDialog() {
    const closeAnimation = dialog?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 250,
    });
    closeAnimation?.addEventListener("finish", () => dialog?.close());
    closeAnimation?.addEventListener("cancel", () => dialog?.close());
  }

  $: {
    if (isOpen) {
      dialog?.showModal();
    } else {
      closeDialog();
    }
  }
</script>

<svelte:window on:click={handleClick} />

<dialog
  bind:this={dialog}
  class:open={isOpen}
  on:cancel|preventDefault={() => (isOpen = false)}
>
  <!-- Have an inner div so outside clicks can be detected -->
  <div bind:this={dialogContent} class="dialog-content">
    <img
      class="w-52 sm:w-64 md:w-72 mx-auto mb-3 md:mb-0 rounded-lg"
      src={juice.image}
      alt={juice.name}
    />

    <div
      class="text-center flex flex-col justify-center md:justify-between md:text-left md:ml-4"
    >
      <div>
        <h1 class="text-2xl font-semibold">{juice.name}</h1>
        <h3 class="font-medium text-lg mb-4 md:mb-6">Rs. {juice.price}</h3>
        <p class="text-sm sm:text-base">{juice.description}</p>
      </div>

      <JuiceBuyButton class="my-4" {juice} />
    </div>
  </div>
</dialog>

<style lang="postcss">
  dialog {
    @apply opacity-0 rounded-xl -translate-y-3 bg-neutral-950 text-white
			   transition-all duration-[250ms];
  }
  dialog.open {
    @apply opacity-100 translate-y-0 scale-100;
  }
  dialog::backdrop {
    @apply opacity-0 transition-opacity duration-[250ms]
		     bg-neutral-900; /* The actual color of the backdrop */
  }
  .dialog-content {
    @apply flex flex-col md:flex-row mx-8 my-6 md:mx-16 md:my-10 gap-2
                max-w-[450px] sm:max-w-[600px] max-h-[70vh];
  }
  dialog.open::backdrop {
    @apply opacity-50;
  }
</style>
