<script lang="ts">
	import { cart } from '$lib/utils/stores';

	// Use the actual cart data from your app's state management
	let cartItems: any = [];
	$: cartItems = $cart; // Observe the cart store and update the cartItems variable

	function calculateTotal() {
		return cartItems.reduce((total: any, item: any) => total + item.price * item.quantity, 0);
	}
</script>

<!-- cart-->
<div class="dropdown dropdown-end">
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<label tabindex="0" for="cart items number" class="btn btn-ghost btn-circle">
		<div class="indicator">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
				/></svg
			>
			<span class="badge badge-sm indicator-item">{cartItems.length} </span>
		</div>
	</label>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
		<div class="card-body">
			<span class="font-bold text-lg">{cartItems.length} Items</span>
			<span class="text-info">Subtotal: {calculateTotal().toFixed(2)} kr</span>
			<div class="card-actions">
				<a class="btn btn-primary btn-block" href="/cart">View cart</a>
			</div>
		</div>
	</div>
</div>
