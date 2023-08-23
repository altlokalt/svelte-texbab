<script lang="ts">
	import Chat from '$lib/components/Chat.svelte';
	import FoodItem from '$lib/components/FoodItem.svelte';
	import Home from '$lib/components/Home.svelte';
	import { page as current, pocketbaseResponse } from '$lib/utils/stores';
	import { getPocketbase } from '$lib/utils/api';

	export let data;
	export let site_name = `${import.meta.env.VITE_SITE_NAME}`;

	let totalPages: number = Math.ceil($pocketbaseResponse.totalItems / $pocketbaseResponse.perPage);

	// Function to fetch data based on the current page
	async function fetchData(page: number) {
		const dataPb = {
			sort: `-food_image`,
			page
		};

		const menuItems: any = await getPocketbase(data.defaultMenu, dataPb).catch((error) => {
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

<svelte:head>
	<title>{site_name}</title>
	<meta name="description" content={site_name + '- home'} />
</svelte:head>
<Home />

<div>
	<div class="grid grid-cols-1 gap-4 justify-items-center">
		<div
			class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center"
		>
			{#each $pocketbaseResponse.items as item}
				<FoodItem bind:item />
			{/each}
		</div>

		<span>Page {$current} of {totalPages}</span>
		<div class="join grid grid-cols-2">
			<button
				class="join-item btn btn-outline"
				on:click={() => setPage($current - 1)}
				disabled={$current === 1}>Previous page</button
			>
			<button
				class="join-item btn btn-outline"
				on:click={() => setPage($current + 1)}
				disabled={$current === totalPages}>Next</button
			>
		</div>
	</div>
</div>

<!-- <Chat /> -->
