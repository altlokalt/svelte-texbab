<!-- DeliveryForm.svelte -->
<script lang="ts">
	import { postPocketbase } from '$lib/utils/api';
	import { order } from '$lib/utils/stores';

	let menuItems: any;
	$: menuItems = $order; // Observe the order store and update the menuItems variable

	let firstName = '';
	let lastName = '';
	let address = '';
	let phoneNumber = '';

	// Declare a custom event
	export let onDeliveryDetailsSubmit: any;

	async function handleSubmit() {
		const deliveryDetails = {
			firstName,
			lastName,
			address,
			phoneNumber
		};

		try {
			menuItems = await postPocketbase('texbab_orders', deliveryDetails); // the actual endpoint for menu items in your Pocketbase

			// Update the order store with the menu items
			order.set(menuItems);

			// Notify the parent component about the delivery details submission
			onDeliveryDetailsSubmit(deliveryDetails);

			// You can use the deliveryDetails object to process the delivery information, e.g., sending it to the server or storing it in the state.
			// For simplicity, we'll just log the details here.
		} catch (error) {
			throw new Error('Failed to fetch menu items.');
		}
	}
</script>

<div class="border p-4 mb-4">
	<h2 class="font-semibold text-lg mb-2">Delivery Details</h2>
	<form on:submit|preventDefault={handleSubmit}>
		<div class="grid grid-cols-2 gap-4">
			<div>
				<label class="block font-semibold">First Name</label>
				<input
					type="text"
					bind:value={firstName}
					class="w-full px-3 py-2 rounded-lg border"
					required
				/>
			</div>
			<div>
				<label class="block font-semibold">Last Name</label>
				<input
					type="text"
					bind:value={lastName}
					class="w-full px-3 py-2 rounded-lg border"
					required
				/>
			</div>
			<div class="col-span-2">
				<label class="block font-semibold">Address</label>
				<input
					type="text"
					bind:value={address}
					class="w-full px-3 py-2 rounded-lg border"
					required
				/>
			</div>
			<div class="col-span-2">
				<label class="block font-semibold">Phone Number</label>
				<input
					type="tel"
					bind:value={phoneNumber}
					class="w-full px-3 py-2 rounded-lg border"
					required
				/>
			</div>
		</div>
		<div class="text-right mt-4">
			<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">submit</button>
		</div>
	</form>
</div>

<style>
	/* Add styling for the delivery form here */
</style>
