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

		const menuItems: any = await getPocketbase($page.params.slug, data).catch((error) => {
			throw error;
		});

		pocketbaseResponse.set(menuItems);

		totalPages = Math.ceil(menuItems.totalItems / menuItems.perPage);

		console.log(
			'page to go to:',
			page,
			'current page:',
			$current,
			'page data response on the store:',
			$pocketbaseResponse
		);
	}

	function setPage(no: number) {
		if (no >= 1 && no <= totalPages) {
			current.set(no);
			fetchData(no);
		}
	}

	
</script>

<div>
	<div>
		<button class="btn" on:click={() => setPage($current - 1)} disabled={$current === 1}
			>Previous</button
		>
		<span>Page {$current} of {totalPages}</span>
		<button class="btn" on:click={() => setPage($current + 1)} disabled={$current === totalPages}
			>Next</button
		>
	</div>

	<div
		class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center"
	>
		{#each $pocketbaseResponse.items as item}
			<FoodItem bind:item />
		{/each}
	</div>
</div>
