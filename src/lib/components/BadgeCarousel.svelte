<script lang="ts">
	import BadgeCard from './ui/BadgeCard.svelte';
	import { menu } from '$lib/config/general';

</script>

<h3 class="text-3xl font-semibold text-left mt-8 mb-4 mx-4">Populære</h3>
<div class=" w-full flex overflow-x-auto">
	{#each menu as badge}
		<BadgeCard name={badge.title} url={badge.slug} />
	{/each}
</div>
