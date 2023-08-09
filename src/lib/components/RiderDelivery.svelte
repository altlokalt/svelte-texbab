<!-- src/CookOrder.svelte -->
<script lang="ts">
	import VisualTableRider from './ui/VisualTableRider.svelte';
	import VisualTableRider2 from './ui/VisualTableRider2.svelte';

	export let data: { items: any[] }; // Specify the type for 'data'
</script>

<!-- Orders to be delivered -->
<div class="border border-gray-300 p-4 mb-4">
	<h2 class="text-lg font-semibold mb-4">Orders to be delivered:</h2>
	<VisualTableRider {data} />
</div>

<!--delivered orders -->
<div class="border border-gray-300 p-4 mb-4">
	<h2 class="text-lg font-semibold mb-4">Delivered:</h2>
	<VisualTableRider2 {data} />
</div>

<style>
	/* Add any custom styles here */
</style>
