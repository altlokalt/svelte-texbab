<script lang="ts">
	export let name: string;
	export let url: string;
</script>

<div class="card bg-base-100 shadow-xl mx-8 my-4 flex-shrink-0">
	<a class="btn btn-primary" href={url}>{name}</a>
</div>
