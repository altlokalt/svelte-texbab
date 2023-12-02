<script>
	import SideBarIcon  from '$lib/components/dashboard/sidebar/SideBarIcon.svelte';
	import { page } from '$app/stores';
</script>

<div
	class="relative top-0 left-0 w-16 h-auto bg-base-300 m-0 flex flex-col text-base-content shadow "
>
	<a href="/dashboard/profile"> <SideBarIcon tooltip="Profile" icon="iconoir:profile-circle" /></a>
	<a href="/dashboard/settings"><SideBarIcon tooltip="Settings" icon="bx:bx-cog" /></a>
	{#if $page.data.user?.role.includes('admin')}
		<a href="/dashboard/admin"><SideBarIcon tooltip="Admin" icon="bx:bx-shield" /></a>
		<a href="/dashboard/guides"><SideBarIcon tooltip="Guides" icon="bx:bx-book-bookmark" /></a>
		<a href="/dashboard/messages"><SideBarIcon tooltip="Messages" icon="bx:bx-message-square-detail" /></a>
		<a href="/dashboard/statistics"><SideBarIcon tooltip="Statistics" icon="bx:bx-bar-chart-alt-2" /></a>
	{/if}
	{#if $page.data.user?.role.includes('chef')}
		<a href="/dashboard/admin/chef"><SideBarIcon tooltip="Cook" icon="bx:bx-food-menu" /></a>
	{/if}
	{#if $page.data.user?.role.includes('rider')}
		<a href="/dashboard/admin/rider"><SideBarIcon tooltip="Rider" icon="bx:bx-biking" /></a>
	{/if}

	<form action="/api/logout" method="POST" class="w-full">
		<button type="submit" class="w-full">
			<SideBarIcon tooltip="Logout" icon="bx:bx-log-out" />
		</button>
	</form>
</div>
