<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import MenuCarousel from '$lib/components/MenuCarousel.svelte';
</script>

<svelte:head>
	<title>meny</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Menu />
<div class="divider my-4" />
<!-- skjekk ut andre menyer -->
<div class="flex flex-col">
	<h1 class="text-3xl font-bold text-center mt-4">Sjekk ut andre meny</h1>
	<MenuCarousel />
</div>
```
