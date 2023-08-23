<script lang="ts">
	import Icon from '@iconify/svelte';
	export let name: any;
	export let icon: string;
	export let url: string;
</script>

<a href={url} class="card bg-primary shadow-xl mx-8 my-4 flex-shrink-0 w-28 h-20 justify-center">
	<div class="flex items-center justify-center">
		<Icon icon={`${icon}`} width="40" height="40" />
	</div>
	<center>
		<label for="badge menu cards" class=" justify-center">{name}</label>
	</center>
</a>
