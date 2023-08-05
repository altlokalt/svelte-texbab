<script lang="ts">
	import Burger from "$lib/components/Burger.svelte"
	export let data;
	
</script>

<svelte:head>
	<title>Burger</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<Burger {data} />

