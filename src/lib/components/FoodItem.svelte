<script lang="ts">
	import { cart } from '$lib/utils/stores';

	 export let item: any;

	 function addToCart(item: any) {
		cart.update((cartItems) => {
			const updatedCart = [...cartItems];
			// Check if the item is already in the cart
			const existingItem = updatedCart.find((cartItem) => cartItem.id === item.id);

			if (existingItem) {
				// If the item is already in the cart, update its quantity
				existingItem.quantity += 1;
			} else {
				// If the item is not in the cart, add it with quantity 1
				updatedCart.push({ ...item, quantity: 1 });
			}

			return updatedCart;
		});
	}
</script>

<div class="border rounded-lg p-4 shadow-md">
	<h2 class="font-semibold text-lg mb-2">{item.item}</h2>
	<p class="mb-2">{item.kommentar}</p>
	<img 
	src={item.food_image ? 'https://api.texbab.no/api/files/' + item.collectionName + '/' + item.id + '/' + item.food_image : "https://api.texbab.no/api/files/vi08f0m1bznkfa3/lx41drdyghi9vpt/ingenbildetilgjengelig_3a5TR8Uzgq.webp" } 
	alt={item.item} 
	class="mb-2 w-52" />	
	<p class="font-bold mb-2">{item.price} kr</p>
	<!-- Add more details as needed -->
	<button class="bg-blue-500 text-white px-4 py-2 rounded-md" on:click={() => addToCart(item)}>Add to Cart</button>
</div>

<style>
	/* Add styling for the food item here */
</style>
