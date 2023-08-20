<script lang="ts">
	import Chat from '$lib/components/Chat.svelte';
	import FoodItem from '$lib/components/FoodItem.svelte';
	import Home from '$lib/components/Home.svelte';
	export let data;

	export let site_name = `${import.meta.env.VITE_SITE_NAME}`;
</script>

<svelte:head>
	<title>{site_name}</title>
	<meta name="description" content={site_name + '- home'} />
</svelte:head>
<Home />

<section class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
	{#each data.items as item}
		<FoodItem {item} />
	{/each}
</section>

<!-- <Chat /> -->
