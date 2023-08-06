<script lang="ts">
import FoodItem from "$lib/components/FoodItem.svelte";
 	import Home from "$lib/components/Home.svelte"
	export let data;
	export let site_name = '';
	export let site_logo = 'https://api.texbab.no/api/files/vi08f0m1bznkfa3/3yha8lupmqzb8pr/logo_W4qE8S8Q9i.png';



</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<Home />

<section class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
	{#each data.items as item}
		<FoodItem {item} />
	{/each}
</section>


<style>
	/* You can customize the styles here as needed */
	.grid {
		margin: 0 auto;
		max-width: 1280px;
	}
</style>
