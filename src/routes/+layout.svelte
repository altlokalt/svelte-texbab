<script>
	import Header from '../lib/components/Header.svelte';
	import '../app.pcss';
	import Footer from '$lib/components/Footer.svelte';

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
