<!-- CartItem.svelte -->
<script lang="ts">
	export let item: any;
</script>

<div class="border p-4 mb-4">
	<h2 class="font-semibold text-lg mb-2">{item.name}</h2>
	<p class="mb-2">Quantity: {item.quantity}</p>
	<p class="font-bold mb-2">{(item.price * item.quantity).toFixed(2)} kr</p>
</div>

<style>
	/* Add styling for the cart item here */
</style>
