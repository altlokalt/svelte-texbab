<script>
	import CookOrder from '$lib/components/CookOrder.svelte';

	export let data;
</script>

<svelte:head>
	<title>Chef orders overview</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1">
	<h1 class="text-2xl font-bold mb-4">Restaurant Cook Dashboard</h1>

	<!-- Your cook-specific content here -->
	<CookOrder {data} />
</section>

<style>
</style>
