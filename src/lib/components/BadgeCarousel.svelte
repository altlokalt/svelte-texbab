<script lang="ts">
	import BadgeCard from './ui/BadgeCard.svelte';
	import { badge } from '$lib/config/general';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

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

	let currentMatprisliste = 0;
	let firstMatprislisteReady = false;
	let isVideoPlaying = false;

	// Array of image URLs and corresponding routes
	const imageLinks = [
		{
			url: 'https://texbab.fly.dev/api/files/izawv6hmhwokkqa/nv0fft46f7g54kg/badge_2_bg_2b4OkbBwRK.png',
			route: '/menu/texbab_burger'
		}, // burger
		{
			url: 'https://texbab.fly.dev/api/files/texbab_fullmenu/s296lvoj40ibfkw/student_PckhFZ8xvD.png',
			route: '/menu/texbab_kebab'
		}, // kebab
		{
			url: 'https://texbab.fly.dev/api/files/n4sfebjxm43jxvc/7n018r6q3tw2az7/hero_slider_3_lhr4ZhzBhy.png?token=',
			route: '/menu/texbab_pizza'
		} // pizza
		// Add more image URLs and routes as needed
	];

	// Initialize the carousel on page load
	onMount(() => {
		updateMatprisliste();
		firstMatprislisteReady = true;
	});

	function updateMatprisliste() {
		const carouselItems = document.querySelectorAll('.carousel-item');
		carouselItems.forEach((item, index) => {
			item.classList.remove('active');
			if (index === currentMatprisliste) {
				item.classList.add('active');
			}
		});
	}

	function goToMatprisliste(index) {
		currentMatprisliste = index;
		updateMatprisliste();
	}

	function nextMatprisliste() {
		currentMatprisliste = (currentMatprisliste + 1) % imageLinks.length;
		updateMatprisliste();
	}

	function prevMatprisliste() {
		currentMatprisliste = (currentMatprisliste - 1 + imageLinks.length) % imageLinks.length;
		updateMatprisliste();
	}

	function navigateTo(route) {
		goto(route);
	}

	function stopVideo() {
		isVideoPlaying = false;
		// Add code to stop the video if needed
	}

	function playVideo() {
		isVideoPlaying = true;
	}
</script>

<div class="max-w-2xl mx-auto">
	{#if firstMatprislisteReady}
		<div class="carousel-wrapper">
			{#each imageLinks as { url, route }, index (index)}
				<a
					href={route}
					on:click={(e) => {
						e.preventDefault();
						navigateTo(route);
					}}
				>
					<div
						class={`carousel-item ${index === currentMatprisliste ? 'active' : ''}`}
						data-carousel-item
					>
						<span
							class="text-2xl sm:text-3xl font-semibold text-white dark:text-gray-800 glossy-background"
						>
							Matprisliste {index + 1}
						</span>
						<img src={url} alt={`Matprisliste ${index + 1}`} class="carousel-img" />
					</div>
				</a>
			{/each}

			<div class="carousel-controls">
				{#each imageLinks as { _, route }, index (index)}
					<button
						type="button"
						aria-label={`Matprisliste ${index + 1}`}
						data-carousel-Matprisliste-to={index}
						on:click={() => goToMatprisliste(index)}
					/>
				{/each}
			</div>

			<button
				on:click={prevMatprisliste}
				type="button"
				class="carousel-nav-button prev"
				aria-label="Previous"
			>
				&lt;
			</button>
			<button
				on:click={nextMatprisliste}
				type="button"
				class="carousel-nav-button next"
				aria-label="Next"
			>
				&gt;
			</button>
		</div>
	{/if}

	<p class="mt-5 glossy-background">
		Opplev KULINARISKE og smakfulle retter tilberedt med kjærlighet av våre dyktige kokker. Bestill
		nå og nyt en eksepsjonell matopplevelse! Retter er stykkene av himmelen! Sjekk ut vår <a
			class="text-blue-600 hover:underline"
			href="/menu"
			target="_blank"
		>
			Hele Menyen</a
		> Her!
	</p>
	<a class="btn btn-primary mt-4" href="tel:+4740848494">Bestill ved å ringe</a>

	<h3 class="text-3xl font-semibold text-left mt-8 mb-4 mx-4">Populære</h3>
	<Splide {options} aria-label="Svelte Splide Example">
		{#each badge as slide}
			<SplideSlide>
				<BadgeCard icon={slide.icon} name={slide.title} url={slide.slug} />
			</SplideSlide>
		{/each}
	</Splide>

	<style>
		.carousel-wrapper {
			overflow: hidden;
			position: relative;
		}

		.carousel-item {
			display: none;
			transition: opacity 0.7s ease-in-out;
		}

		.carousel-item.active {
			display: block;
		}

		.carousel-img {
			width: 100%;
			height: auto;
			border-radius: 40px; /* Rounded corners for images */
		}

		.carousel-controls {
			position: absolute;
			bottom: 1rem;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			gap: 0.5rem;
		}

		.carousel-controls button {
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background-color: #fff;
			border: none;
			cursor: pointer;
			transition: background-color 0.3s ease;
		}

		.glossy-background {
			background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
			display: inline;
		}

		.carousel-nav-button {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			font-size: 24px;
			color: white;
			background-color: rgba(255, 255, 255, 0.5);
			border: none;
			padding: 8px;
			cursor: pointer;
			transition: background-color 0.3s ease;
		}

		.carousel-nav-button:hover {
			background-color: rgba(255, 255, 255, 0.7);
		}

		.prev {
			left: 0;
		}

		.next {
			right: 0;
		}
	</style>
</div>
