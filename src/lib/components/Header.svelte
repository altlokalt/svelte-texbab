<script lang="ts">
	import { page } from '$app/stores';
	import { cart } from '$lib/utils/stores';
	import { ThemeChanger } from '@valiantlynx/svelte-ui';
	import ProfileModal from './ProfileModal.svelte';
	import CartIcon from './CartIcon.svelte';

	export let site_logo = `${import.meta.env.VITE_SITE_LOGO}`;
	// Use the actual cart data from your app's state management
	let cartItems: any = [];
	$: cartItems = $cart; // Observe the cart store and update the cartItems variable

	function calculateTotal() {
		return cartItems.reduce((total: any, item: any) => total + item.price * item.quantity, 0);
	}
</script>

<div class="navbar bg-base-100 sticky top-0 z-50">
	<div class="flex-1">
		<a class="absolute h-full" href="/">
			<img src={site_logo} alt="SvelteKit" class="h-full" />
			{$page.data.siteName}
		</a>
	</div>
	<ThemeChanger />

	<div class="flex-none">
		<!-- cart-->
		<CartIcon />

		<!-- profile-->
		<ProfileModal />
	</div>
</div>
