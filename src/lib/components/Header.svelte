<script lang="ts">
	import { page } from '$app/stores';
	import { cart } from '$lib/utils/stores';

// Use the actual cart data from your app's state management
let cartItems: any = [];
$: cartItems = $cart; // Observe the cart store and update the cartItems variable

function calculateTotal() {
	return cartItems.reduce((total: any, item: any) => total + item.price * item.quantity, 0);
}
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src="https://api.texbab.no/api/files/vi08f0m1bznkfa3/v4p2xknkqkus1kq/my_project_99h9vRBAc8.png" alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/menu') ? 'page' : undefined}>
				<a href="/menu">menu</a>
			</li>
			<li aria-current={$page.url.pathname === '/admin' ? 'page' : undefined}>
				<a href="/admin">Admin</a>
			</li>

		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="flex-none corner">
		<div class="dropdown dropdown-end">
			<label tabindex="-1" class="btn btn-ghost btn-circle">
				<div class="indicator">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
					<span class="badge badge-sm indicator-item indicator-start indicator-bottom">{cartItems.length}</span>
				</div>
			</label>
			<div tabindex="-1" class="mt-3 card card-compact dropdown-content w-52 bg-primary -100 shadow">
				<div class="card-body">
					<span class="font-bold text-lg">{cartItems.length} Items</span>
					<span class="text-info">Subtotal: {calculateTotal().toFixed(2)} kr</span>
					<div class="card-actions">
						<a href="/cart" class="btn btn-primary btn-block">View cart</a>
					</div>
				</div>
			</div>
		</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		

	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
