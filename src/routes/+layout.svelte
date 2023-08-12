<script>
	import Header from '../lib/components/Header.svelte';
	import '../app.pcss';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { authData } from '$lib/utils/stores';
	import { pb } from '$lib/utils/api';

	onMount(() => {
		pb.authStore.isValid ? authData.set(pb.authStore.model) : null;
	});
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex-1">
		<slot />
	</main>

	<Footer />
</div>