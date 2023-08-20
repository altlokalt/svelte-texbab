<script lang="ts">
	import Chat from '$lib/components/Chat.svelte';
import FoodItem from '$lib/components/FoodItem.svelte';
	import Home from '$lib/components/Home.svelte';
	export let data;
	export let site_name = `${import.meta.env.VITE_SITE_NAME}`;
	export let site_logo =`${import.meta.env.VITE_SITE_LOGO}`;

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

<!-- <Chat /> -->
