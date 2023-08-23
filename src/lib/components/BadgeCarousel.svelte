<script lang="ts">
	import BadgeCard from './ui/BadgeCard.svelte';
	import { badge } from '$lib/config/general';
	import HorizontalCard from '$lib/components/ui/HorizontalCard.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	const options: any = {
		rewind: true,
		autoplay: true,
		arrows: true,
		type: 'loop',
		focus: 'center',
		autoWidth: true,
		perMove: 1,
		drag: 'free'
	};

</script>

<h3 class="text-3xl font-semibold text-left mt-8 mb-4 mx-4">Populære</h3>
<Splide {options} aria-label="Svelte Splide Example">
	{#each badge as slide}
		<SplideSlide>
			<BadgeCard icon={slide.icon} name={slide.title} url={slide.slug} />
		</SplideSlide>
	{/each}
</Splide>