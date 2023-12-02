<script lang="ts">
	import { page } from '$app/stores';
	import { cart } from '$lib/utils/stores';
	import {ThemeChanger} from '@valiantlynx/svelte-ui';
	import { logoutPocketbase, pb } from '$lib/utils/api';
	import { authData } from '$lib/utils/stores';

	export let site_logo = `${import.meta.env.VITE_SITE_LOGO}`;
	export let site_name = `${import.meta.env.VITE_SITE_NAME}`;
	export let site_url = `${import.meta.env.VITE_SITE_URL}`;
	// Use the actual cart data from your app's state management
	let cartItems: any = [];
	$: cartItems = $cart; // Observe the cart store and update the cartItems variable

	function calculateTotal() {
		return cartItems.reduce((total: any, item: any) => total + item.price * item.quantity, 0);
	}

	const avatar = pb.authStore.model?.avatar
		? `${import.meta.env.VITE_PB_API_2}/api/files/_pb_users_auth_/${pb.authStore.model?.id}/${
				pb.authStore.model?.avatar
		  }`
		: `https://avatars.dicebear.com/api/adventurer-neutral/${pb.authStore.model?.username}.svg`;
</script>

<div class="navbar bg-base-100 sticky top-0 z-50">
	<div class="flex-1">
		<a class="absolute h-full" href="/">
			<img src={site_logo} alt="SvelteKit" class="h-full" />
		</a>
	</div>
	<ThemeChanger />

	<div class="flex-none">
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
			<div
				tabindex="0"
				class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
			>
				<div class="card-body">
					<span class="font-bold text-lg">{cartItems.length} Items</span>
					<span class="text-info">Subtotal: {calculateTotal().toFixed(2)} kr</span>
					<div class="card-actions">
						<a class="btn btn-primary btn-block" href="/cart">View cart</a>
					</div>
				</div>
			</div>
		</div>

		<!-- profile-->
		{#if pb.authStore.isValid}
			<div class="dropdown dropdown-end">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<label tabindex="0" for="profile button" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img
							src={avatar}
							alt={`${$authData.username} profile picture on ${site_name}, ${site_url}`}
						/>
					</div>
				</label>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<a class="justify-between" href="/dashboard/profile/preview">
							Profile
							<span class="badge">New</span>
						</a>
					</li>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/">Home</a>
					</li>
					<li aria-current={$page.url.pathname === '/chat' ? 'page' : undefined}>
						<a href="/chat">
							Chat
							<span class="badge">New</span>
						</a>
					</li>
					<!-- <li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li> -->
					<li aria-current={$page.url.pathname.startsWith('/menu') ? 'page' : undefined}>
						<a href="/menu">menu</a>
					</li>
					<li
						aria-current={$page.url.pathname === '/dashboard/profile/preview' ? 'page' : undefined}
					>
						<a class="justify-between" href="/dashboard/profile/preview">
							Dashboard
							<span class="badge">New</span>
						</a>
					</li>
					<li>
						<button class="signout-button bg-error opacity-80" on:click={logoutPocketbase}
							>Sign Out</button
						>
					</li>
				</ul>
			</div>
		{:else}
			<a href="/login" class="btn btn-primary">login</a>
		{/if}
	</div>
</div>
