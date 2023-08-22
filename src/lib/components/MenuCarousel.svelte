<script lang="ts">
	import HorizontalCard from '$lib/components/ui/HorizontalCard.svelte';

	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	const slides = [
		{
			img: `${
				import.meta.env.VITE_PB_URL
			}/api/files/eijp9z2zxlgrd4a/rzx50a9wq8sjf5q/0d537318c00611ec84202eb08599686b_a5987812_7e71_11eb_99f8_ea53df50c496_5cc54b47842a7094ebaec2aef0611d_p4L4GTD1XO.png`,
			title: 'Barne',
			url: '/menu/barne'
		},
		{
			img: `${
				import.meta.env.VITE_PB_URL
			}/api/files/eijp9z2zxlgrd4a/rzx50a9wq8sjf5q/0d537318c00611ec84202eb08599686b_a5987812_7e71_11eb_99f8_ea53df50c496_5cc54b47842a7094ebaec2aef0611d_p4L4GTD1XO.png`,
			title: 'Burger',
			url: '/menu/burger'
		},
		{
			img: `${
				import.meta.env.VITE_PB_URL
			}/api/files/qlhqb7ir7o548t1/mkimb7hoxx1oz9i/main_header_WouOltkLLE.webp`,
			title: 'Eat Green',
			url: '/menu/eat-green'
		},
		{
			img: `${
				import.meta.env.VITE_PB_URL
			}/api/files/0zali0zpl9bb4yh/kvdj8zevopzn45m/download_1_GHHWWEdu1g.jpeg`,
			title: 'Kebab',
			url: '/menu/kebab'
		},
		{
			img: `${
				import.meta.env.VITE_PB_URL
			}/api/files/latdufbxmqnxcrk/77v7kftyfnw4b2z/pizza_Lqbuwn5M31.jpg`,
			title: 'Pizza',
			url: '/menu/pizza'
		},
		{
			img: `${
				import.meta.env.VITE_PB_URL
			}/api/files/izawv6hmhwokkqa/nv0fft46f7g54kg/badge_2_bg_2b4OkbBwRK.png`,
			title: 'smaretter',
			url: '/menu/smaretter'
		},
		{
			img: `${
				import.meta.env.VITE_PB_URL
			}/api/files/izawv6hmhwokkqa/nv0fft46f7g54kg/badge_2_bg_2b4OkbBwRK.png`,
			title: 'Special',
			url: '/menu/special'
		}
	];

	const options: any = {
		rewind: true,
		autoplay: true,
		arrows: true,
		type: 'loop',
		focus: 'center',
		autoWidth: true,
		perMove: 1,
		drag: 'free',
	};
</script>

<h3 class="text-3xl font-semibold text-left mt-8 mb-4 mx-4">Utforsk vår herlige meny</h3>
<Splide {options} aria-label="Svelte Splide Example">
	{#each slides as slide}
		<SplideSlide>
			<HorizontalCard title={slide.title} img={slide.img} url={slide.url} />
		</SplideSlide>
	{/each}
</Splide>
