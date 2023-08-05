<script lang="ts">
	import Barne from "$lib/components/Barne.svelte"
	export let data;
	
</script>

<svelte:head>
	<title>meny</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<Barne {data} />
<style>
	/* You can customize the styles here as needed */
	.grid {
		margin: 0 auto;
		max-width: 1280px;
	}
</style>
