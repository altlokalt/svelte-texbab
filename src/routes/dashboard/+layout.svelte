<script>
	import Login from '$lib/components/Login.svelte';
	import Layout from '$lib/components/dashboard/Layout.svelte';
	import { pb } from '$lib/utils/api';
	import { authData } from '$lib/utils/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		pb.authStore.isValid ? authData.set(pb.authStore.model) : null;
	});
</script>

{#if pb.authStore.isValid}
	<Layout>
		<slot />
	</Layout>
{:else}
	<Login />
{/if}
