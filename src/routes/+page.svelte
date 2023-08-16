<script lang="ts">
	import Chat from '$lib/components/Chat.svelte';
import FoodItem from '$lib/components/FoodItem.svelte';
	import Home from '$lib/components/Home.svelte';
	export let data;
	export let site_name = 'Altlokal';
	export let site_logo ='${import.meta.env.VITE_PB_URL}/api/files/vi08f0m1bznkfa3/uthvsiulqhkbz1l/alt_removebg_preview_4QM2sGBAzu.png?token=';

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

<Chat />
