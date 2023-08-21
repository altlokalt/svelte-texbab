<script>
	import { pb } from '$lib/utils/api';
	import { authData } from '$lib/utils/stores';
	import { onMount } from 'svelte';
	import '../../app.pcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		pb.authStore.isValid ? authData.set(pb.authStore.model) : null;
	});
</script>

<div class="flex flex-col">
	<Header />
	<slot></slot>
	<Footer />
</div>
