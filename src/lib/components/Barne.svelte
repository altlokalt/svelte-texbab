<script lang="ts">
	import FoodItem from '$lib/components/FoodItem.svelte';
	import MenuCarousel from './MenuCarousel.svelte';

	export let data: any;
</script>

<MenuCarousel />
<div
	class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-items-center mx-4"
>
	{#each data.items as item}
		<FoodItem {item} />
	{/each}
</div>

<style>
	/* Add styling for the menu page here */
</style>
