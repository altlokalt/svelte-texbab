<!-- cart.svelte -->
<script lang="ts">
	import CartItem from '$lib/components/CartItem.svelte';
	import { cart } from '$lib/utils/stores';

	// Use the actual cart data from your app's state management
	let cartItems: any = [];
	$: cartItems = $cart; // Observe the cart store and update the cartItems variable

	function calculateTotal() {
		return cartItems.reduce((total: any, item: any) => total + item.price * item.quantity, 0);
	}
</script>

<section class="p-4">
	<h1 class="text-2xl font-semibold mb-4">Cart</h1>
	{#if cartItems.length > 0}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each cartItems as item}
				<CartItem {item} />
			{/each}
		</div>
		<div class="mt-4 text-center">
			<p class="font-bold text-xl">Total: {calculateTotal().toFixed(2)} kr</p>
			<!-- Add a checkout button or any other relevant information here -->
		</div>
		
		<a class="bg-blue-500 text-white px-4 py-2 rounded-md btn-primary" href="/checkout">Checkout</a>
	{:else}
		<p class="text-center">Your cart is empty.</p>
	{/if}
</section>

<style>
	/* You can customize the styles here as needed */
	.grid {
		max-width: 1280px;
		margin: 0 auto;
	}
</style>
