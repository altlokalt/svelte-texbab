<!-- checkout.svelte -->
<script lang="ts">
	import { cart } from '$lib/utils/stores';
	import { goto } from '$app/navigation';
	import OrderSummary from '$lib/components/OrderSummary.svelte';
	import DeliveryForm from '$lib/components/DeliveryForm.svelte';
	import PaymentMethod from '$lib/components/PaymentMethod.svelte';
  
  
	// Use the actual cart data from your app's state management
	let cartItems: any = [];
	$: cartItems = $cart; // Observe the cart store
  
	// Step control
	let currentStep = 1;
  
	// Track delivery details submission
	let deliveryDetailsSubmitted = false;
  
	// Handle moving to the next step
	function nextStep() {
	  if (currentStep === 2 && !deliveryDetailsSubmitted) {
		alert('Please submit delivery details first.');
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
  
	// Handle placing the order (you can add further logic here)
	function placeOrder() {
	  console.log('Order Placed');
	  goto('/');
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
		<PaymentMethod />
		<div class="flex justify-between mt-4">
		  <button on:click={prevStep} class="bg-blue-500 text-white px-4 py-2 rounded-md">Previous</button>
		  <button on:click={nextStep} class="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
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
	.grid {
	  max-width: 1280px;
	  margin: 0 auto;
	}
  </style>
  