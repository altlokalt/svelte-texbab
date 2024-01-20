<script lang="ts">
	import FoodItem from '$lib/components/FoodItem.svelte';
	import { page as current, pocketbaseResponse } from '$lib/utils/stores';
	import { getPocketbase } from '$lib/utils/api';
	import { page } from '$app/stores';

	let totalPages: number = Math.ceil($pocketbaseResponse.totalItems / $pocketbaseResponse.perPage);

	// Function to fetch data based on the current page
	async function fetchData(page: number) {
		const data = {
			sort: `-food_image`,
			page
		};

		// svelte-ignore error
		const menuItems: any = await getPocketbase($page.params.slug, data).catch((error) => {
			throw error;
		});

		pocketbaseResponse.set(menuItems);

		totalPages = Math.ceil(menuItems.totalItems / menuItems.perPage);
	}

	function setPage(no: number) {
		if (no >= 1 && no <= totalPages) {
			current.set(no);
			fetchData(no);
		}
	}
</script>

<div class="grid grid-cols-1 gap-4 justify-items-center">
	<!-- Title for the Grid -->
	<h2 class="text-3xl font-bold text-center mt-4">
		Sulten? sjekk ut vår {$page.params.slug} meny.
	</h2>

	<!-- Food Items Container -->
	<div class="flex flex-wrap gap-4 justify-center m-2">
		{#each $pocketbaseResponse.items as item}
			<FoodItem bind:item />
		{/each}
	</div>

	<!-- Pagination Text -->
	<span class="text-center">Page {$current} of {totalPages}</span>

	<!-- Pagination Buttons -->
	<div class="grid grid-cols-2 gap-4 w-full sm:w-1/4 justify-self-center">
		<button
			class="btn btn-primary"
			on:click={() => setPage($current - 1)}
			disabled={$current === 1}
		>
			Previous page
		</button>
		<button
			class="btn btn-primary"
			on:click={() => setPage($current + 1)}
			disabled={$current === totalPages}
		>
			Next
		</button>
	</div>
</div>
