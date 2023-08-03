<script lang="ts">
	import FoodItem from '$lib/components/FoodItem.svelte';

	export let data: any;
</script>

<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
	<h1>Meny</h1>
	{#each data.items as item}
		<FoodItem {item} />
	{/each}
</section>

<style>
	/* Add styling for the menu page here */
</style>
