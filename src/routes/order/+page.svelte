<script>
	import OrderTracking from "$lib/components/OrderTracking.svelte";
</script>

<svelte:head>
	<title>OrderConfirmation</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1">
	<h1 class="text-2xl font-bold mb-4">Customer Order Tracking</h1>

  <!-- Your customer-specific content here -->

  <OrderTracking />
</section>

<style>
</style>
