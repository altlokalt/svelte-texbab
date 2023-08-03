<!-- checkout.svelte -->
<script lang="ts">
	import { cart, order } from '$lib/utils/stores';
	import { goto } from '$app/navigation';
	import OrderSummary from '$lib/components/OrderSummary.svelte';
	import DeliveryForm from '$lib/components/DeliveryForm.svelte';
	import PaymentMethod from '$lib/components/PaymentMethod.svelte';
	import { patchPocketbase } from '$lib/utils/api';

	// Use the actual cart data from your app's state management
	let cartItems: any = [];
	$: cartItems = $cart; // Observe the cart store

	// Use the actual order data from your app's state management
	let orderItem: any = [];
	$: orderItem = $order; // Observe the order store

	// Step control
	let currentStep = 1;

	// ordered
	let ordered = false;
	let paid = false;

	// Track delivery details submission
	let deliveryDetailsSubmitted = false;

	// Track payment method selection
	let selectedPaymentMethod = '';

	// Handle moving to the next step
	function nextStep() {
		if (currentStep === 2 && !deliveryDetailsSubmitted) {
			alert('Please submit delivery details first.');
			return;
		}

		if (currentStep === 3 && !selectedPaymentMethod) {
			alert('Please select a payment method.');
			return;
		}

		currentStep += 1;
	}

	// Handle moving to the previous step
	function prevStep() {
		currentStep -= 1;
	}

	// Handle delivery details submission
	function handleDeliveryDetailsSubmit() {
		// You can add further validation here if needed
		deliveryDetailsSubmitted = true;
	}

	// handle order status
	function handleOrderStatus() {
		ordered = true;
	}

	// handle payment status
	function handlePaymentStatus() {
		paid = true;
	}

	// Handle placing the order (you can add further logic here)
	async function placeOrder() {
		await handleSubmit();
		console.log('Order Placed', orderItem.id);
		goto('/order-confirmation');
	}

	async function handleSubmit() {
		const status = {
			ordered,
			paid,
		};

		try {
			const menuItems = await patchPocketbase(`texbab_orders/records/${orderItem.id}`, status); // the actual endpoint for menu items in your Pocketbase
		} catch (error) {
			throw new Error('Failed to fetch menu items.');
		}
	}
</script>

<section class="p-4">
	<h1 class="text-2xl font-semibold mb-4">Checkout</h1>
	{#if cartItems.length > 0}
		{#if currentStep === 1}
			<!-- Step 1: Cart Summary -->
			<div>
				<OrderSummary {cartItems} />
				<button on:click={nextStep} class="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
			</div>
		{:else if currentStep === 2}
			<!-- Step 2: Delivery Information -->
			<DeliveryForm onDeliveryDetailsSubmit={handleDeliveryDetailsSubmit} />
			<div class="flex justify-between mt-4">
				<button on:click={prevStep} class="bg-blue-500 text-white px-4 py-2 rounded-md">Previous</button>
				<button on:click={nextStep} class="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
			</div>
		{:else if currentStep === 3}
			<!-- Step 3: Payment Method -->
			<PaymentMethod bind:ordered={ordered} bind:paid={paid} bind:selectedPaymentMethod={selectedPaymentMethod} />
			<div class="flex justify-between mt-4">
				<button on:click={prevStep} class="bg-blue-500 text-white px-4 py-2 rounded-md">Previous</button>
				<button on:click={nextStep} class="bg-blue-500 text-white px-4 py-2 rounded-md cursor-not-allowed:opacity-50">Next</button>
			</div>
		{:else if currentStep === 4}
			<!-- Step 4: Order Confirmation -->
			<div>
				<h2 class="font-semibold text-lg mb-2">Order Summary</h2>
				<OrderSummary {cartItems} />
			</div>
			<div class="flex justify-between mt-4">
				<button on:click={prevStep} class="bg-blue-500 text-white px-4 py-2 rounded-md">Previous</button>
				<button on:click={placeOrder} class="bg-blue-500 text-white px-4 py-2 rounded-md">Place Order</button>
			</div>
		{/if}
	{:else}
		<p class="text-center">Your cart is empty.</p>
	{/if}
</section>

<style>
	/* You can customize the styles here as needed */
</style>
