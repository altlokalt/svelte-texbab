<script lang="ts">
	import FoodItem from '$lib/components/FoodItem.svelte';
	import Home from '$lib/components/Home.svelte';
	import { page as current, pocketbaseResponse } from '$lib/utils/stores';
	import { getPocketbase } from '$lib/utils/api';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let site_name = $page.data.siteName;

	let totalPages: number = Math.ceil($pocketbaseResponse.totalItems / $pocketbaseResponse.perPage);

	// Function to fetch data based on the current page
	async function fetchData(page: number) {
		const dataPb = {
			sort: `-food_image`,
			page
		};

		const menuItems: any = await getPocketbase('texbab_barnemenu', dataPb).catch((error) => {
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

	onMount(() => {
		fetchData(1);
	});
</script>

<svelte:head>
	<title>{site_name}</title>
	<meta name="description" content={site_name + '- home'} />
</svelte:head>
<Home />

<div class="flex gap-4 flex-wrap justify-items-center m-2">
	{#each $pocketbaseResponse.items as item}
		<FoodItem bind:item />
	{/each}
</div>

<span class="text-center">Page {$current} of {totalPages}</span>
<div class="join grid grid-cols-2 w-full sm:w-1/4 ">
	<button
		class="join-item btn btn-primary"
		on:click={() => setPage($current - 1)}
		disabled={$current === 1}>Previous page</button
	>
	<button
		class="join-item btn btn-primary"
		on:click={() => setPage($current + 1)}
		disabled={$current === totalPages}>Next</button
	>
</div>

<!-- <Chat /> -->
