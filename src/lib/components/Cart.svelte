<!-- cart.svelte -->
<script lang="ts">
	import { goto } from '$app/navigation';
	import CartItem from '$lib/components/CartItem.svelte';
	import { cart } from '$lib/utils/stores';

	// Use the actual cart data from your app's state management
	let cartItems: any = [];
	$: cartItems = $cart; // Observe the cart store and update the cartItems variable

	let shipping = 80;

	function calculateSubTotal() {
		return cartItems.reduce((total: any, item: any) => total + item.price * item.quantity, 0);
	}

	function calculateTotal() {
		return parseFloat(calculateSubTotal().toFixed(2)) * 1 + shipping;
	}
	
</script>

<section class=" bg-base-200 text-base-content py-12 sm:py-16 lg:py-20 w-full">
	<div class="mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-center">
			<h1 class="text-2xl font-semibold">Din Handlekurv</h1>
		</div>

		<div class="mx-auto mt-8 max-w-2xl md:mt-12">
			<div class="bg-base-300 shadow rounded-2xl">
				<div class="px-4 py-6 sm:px-8 sm:py-10">
					<div class="flow-root">
						<ul class="-my-8">
							{#each cartItems as item}
								<CartItem {item} />
							{/each}
						</ul>
					</div>

					<div class="mt-6 border-t border-b py-2">
						<div class="flex items-center justify-between">
							<p class="text-sm">Subtotal</p>
							<p class="text-lg font-semibold">{calculateSubTotal().toFixed(2)} kr</p>
						</div>
						<div class="flex items-center justify-between">
							<p class="text-sm">Levering</p>
							<p class="text-lg font-semibold">NOK {shipping.toFixed(2)}</p>
						</div>
					</div>
					<div class="mt-6 flex items-center justify-between">
						<p class="text-sm font-medium">Total</p>
						<p class="text-2xl font-semibold">
							<span class="text-xs font-normal 400">NOK</span>
							{calculateTotal().toFixed(2)}
						</p>
					</div>

					<div class="mt-6 text-center">
						<button
							type="button"
							on:click={() => goto('/checkout')}
							class="group inline-flex w-full items-center justify-center rounded-md bg-primary text-primary-content px-6 py-4 text-lg font-semibold transition-all duration-200 ease-in-out focus:shadow hover:bg-secondary hover:text-secondary-content"
						>
							Checkout
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
						</button>
					</div>
					<div class="mt-6 text-center">
						<button
							type="button"
							on:click={() => goto('/menu')}
							class=" btn-sm group inline-flex w-full items-center justify-center rounded-md bg-primary text-primary-content px-6 py-4 text-lg font-semibold transition-all duration-200 ease-in-out focus:shadow hover:bg-secondary hover:text-secondary-content"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M20.328 11v2H7.5l3.243 3.243l-1.415 1.414L3.672 12l5.656-5.657l1.415 1.414L7.5 11h12.828Z"
								/></svg
							>
							Forsett å handle
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
