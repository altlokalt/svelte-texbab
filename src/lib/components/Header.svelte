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

<div class="navbar bg-base-100 sticky top-0 z-50">
	{#if !$page.data.isSmallDevice}
		<img src={logo} alt="{$page.data.siteName} logo" class="w-20" />
	{/if}
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl" href="/">{$page.data.siteName}</a>
	</div>

	<ThemeChanger />

	<div class="flex-none">
		<!-- cart-->
		<CartIcon />
		<!-- profile-->
		<ProfileModal />
	</div>
</div>
