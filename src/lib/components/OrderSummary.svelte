<!-- OrderSummary.svelte -->
<script lang="ts">
	export let cartItems: any;

	function calculateTotal() {
		return cartItems.reduce((total: any, item: any) => total + item.price * item.quantity, 0);
	}
</script>

<div class="border p-4 mb-4">
	<h2 class="font-semibold text-lg mb-2">Order Summary</h2>
	<div class="grid grid-cols-2 gap-2">
		{#each cartItems as item}
			<div>
				<p class="font-semibold">{item.name}</p>
				<p>Quantity: {item.quantity}</p>
				<p class="font-bold">{(item.price * item.quantity).toFixed(2)} kr</p>
			</div>
		{/each}
	</div>
	<div class="text-right mt-2">
		<p class="font-bold">Total: {calculateTotal().toFixed(2)} kr</p>
	</div>
</div>

<style>
	/* Add styling for the order summary here */
</style>
