<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Menyvideo from './Menyvideo.svelte';

	let site_name = $page.data.siteName;
</script>

<div
	class="hero"
	style="background-image: url({import.meta.env
		.VITE_PB_URL}/api/files/texbab_burger/wpjb8f7r8vu8ikd/pizza_3O6P9DTPPR.jpg);"
>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">{site_name} Hvor hvert bitt er en rodeo av smak</h1>
			<!--reels-->
			 <Menyvideo />

		</div>
	</div>
</div>

<style>
	.hero {
		min-height: 100vh;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.hero-overlay {
		background-color: rgba(0, 0, 0, 0.6);
	}

	.hero-content {
		text-align: center;
		color: #fff;
	}
</style>
