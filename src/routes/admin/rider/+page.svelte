<script>
	import RiderDelivery from "$lib/components/RiderDelivery.svelte";
	export let data;
</script>

<svelte:head>
	<title>Deliveries overview</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1">
	<div class="flex items-center">
		<a href="/admin" class="text-indigo-600 underline"><span class="mdi mdi-restore"></span>
			Back to Admin</a>
		<h2 class="mr-4">Rider</h2>
	  </div>
	<h1>Deliveries overview</h1>
</section>

<RiderDelivery {data}/>

<style>
</style>
