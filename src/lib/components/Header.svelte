<script lang="ts">
	import { page } from '$app/stores';
	import { ThemeChanger } from '@valiantlynx/svelte-ui';
	import ProfileModal from './ProfileModal.svelte';
	import CartIcon from './CartIcon.svelte';
	const logo = $page.data.sites?.logo
		? `${import.meta.env.VITE_PB_URL}/api/files/${$page.data.sites?.collectionId}/${
				$page.data.sites?.id
		  }/${$page.data.sites?.logo}`
		: `https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${$page.data.sites?.siteName}`;
</script>

<!-- Small Devices Layout -->
<div>
	<div class="navbar bg-base-300 max-w-full sm:hidden">
		<div class="flex-1">
			<a class="btn btn-ghost normal-case text-xl" href="/">{$page.data.siteName}</a>
			<ThemeChanger />
		</div>
		<!-- cart-->
		<CartIcon />
		<ProfileModal />
	</div>
</div>

<!-- Large Devices Layout -->
<div class="navbar bg-base-300 hidden sm:flex">
	<div class="flex-1">
		{#if !$page.data.isSmallDevice}
			<img src={logo} alt="{$page.data.siteName} logo" class="w-20" />
		{/if}
		<a class="btn btn-ghost normal-case text-xl" href="/">{$page.data.siteName}</a>
		<ThemeChanger />
	</div>
	<div class="flex-none gap-2">
		<!-- cart-->
		<CartIcon />
		<ProfileModal />
	</div>
</div>
