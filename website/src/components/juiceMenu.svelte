<script lang="ts">
    import {juices} from "../lib/data";

    function trimText(text: string) {
        /* Trims down text to the first 60 characters */
        return text.substring(0, 60);
    }
</script>

<div class="juice-menu-grid">
    {#each juices as juice (juice.id)}
        <div class="juice-card">
            <img class="juice-image" src={juice.image} alt={juice.name}>
            <h3 class="text-xl mt-3 mb-4 font-medium">{juice.name}</h3>
            <p class="max-w-[80%] max-h-[48px] text-left overflow-y-hidden mb-4">{trimText(juice.description)}...</p>

            <p>Rs. {juice.price}</p>
        </div>
    {/each}
</div>

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