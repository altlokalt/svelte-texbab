<script>
	import Header from '../lib/components/Header.svelte';
	import '../app.pcss';
	import Footer from '$lib/components/Footer.svelte';

	import { authPocketbase } from '$lib/utils/api'; // Adjust these imports accordingly
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(async () => {
		// pb
		const res = await authPocketbase('sverre', 'sverresverre');
		goto('/login');
		console.log('res: ', res);
	});

</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex-1">
		<slot />
	</main>

	<Footer />
</div>

<style>
	/* You don't need to specify styles for .app, main, and footer anymore */
</style>
