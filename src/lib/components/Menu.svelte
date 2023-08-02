<script>
	import Header from '$lib/components/Header.svelte';
	import FoodItem from '$lib/components/FoodItem.svelte';

	// Replace this with actual data fetched from your backend or define the menu items statically
	let menuItems = [
		{ name: 'Item 1', price: 10, description: 'Description of item 1' },
		{ name: 'Item 2', price: 15, description: 'Description of item 2' },
		// Add more menu items as needed
	];
</script>

<section>
	<h1>Menu</h1>
	<div class="grid grid-cols-2 gap-4">
		{#each menuItems as item}
			<FoodItem {item} />
		{/each}
	</div>
</section>

<style>
	/* Add styling for the menu page here */
</style>
