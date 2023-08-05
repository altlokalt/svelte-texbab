<script lang="ts">
	import { cart } from '$lib/utils/stores';
	import CompactCard from './ui/CompactCard.svelte';

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

<CompactCard {item} {addToCart} />
