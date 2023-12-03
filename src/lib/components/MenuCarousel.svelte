<script lang="ts">
	import HorizontalCard from '$lib/components/ui/HorizontalCard.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { menu } from '$lib/config/general';

	const options: any = {
		rewind: true,
		autoplay: true,
		arrows: true,
		type: 'loop',
		focus: 'center',
		autoWidth: true,
		perMove: 1,
		drag: 'free',
		fixedHeight: '10rem'
	};
</script>

<h3 class="text-3xl font-semibold text-left mt-8 mb-4 mx-4">Utforsk vår herlige meny</h3>
<Splide {options} aria-label="Svelte Splide Example">
	{#each menu as slide}
		<SplideSlide>
			<HorizontalCard title={slide.title} img={slide.img} url={slide.slug} />
		</SplideSlide>
	{/each}
</Splide>
