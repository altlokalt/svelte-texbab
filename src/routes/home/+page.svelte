<script lang="ts">
	import BlogCarousel from '$lib/components/ui/gg/BlogCarousel.svelte';
	import Cart from '$lib/components/ui/gg/Cart.svelte';
	import CustomFoodHero from '$lib/components/ui/gg/CustomFoodHero.svelte';
	import FoodOptionsTotal from '$lib/components/ui/gg/FoodOptionsTotal.svelte';
	import Footer from '$lib/components/ui/gg/Footer.svelte';
	import HeroCarousel from '$lib/components/ui/gg/HeroCarousel.svelte';
	import MenuCarousel from '$lib/components/ui/gg/MenuCarousel.svelte';
	import MenyTab from '$lib/components/ui/gg/MenyTab.svelte';
	import MobileMenu from '$lib/components/ui/gg/MobileMenu.svelte';
	import Offers from '$lib/components/ui/gg/Offers.svelte';
	import OnPcHeader from '$lib/components/ui/gg/OnPcHeader.svelte';
	import OrderSection from '$lib/components/ui/gg/OrderSection.svelte';
	import PopupSearch from '$lib/components/ui/gg/PopupSearch.svelte';
	import PreLoader from '$lib/components/ui/gg/PreLoader.svelte';
	import PriceList from '$lib/components/ui/gg/PriceList.svelte';
	import QuickView from '$lib/components/ui/gg/QuickView.svelte';
	import ScrollToTop from '$lib/components/ui/gg/ScrollToTop.svelte';
	import Testimonies from '$lib/components/ui/gg/Testimonies.svelte';
</script>

<head>
	<meta charset="utf-8" />
	<meta http-equiv="x-ua-compatible" content="ie=edge" />
	<title
		>Texbab er en Gatekjøkken. Vi tilbyr gatemat som pizza, burgere, kebab og ssamtidig muliens for
		maskinvask for bilen din mens du venter på maten</title
	>
	<meta name="author" content="Themeholy" />
	<meta
		name="description"
		content="Texbab er en Gatekjøkken. Vi tilbyr gatemat som pizza, burgere & kebab "
	/>
	<meta
		name="keywords"
		content="Texbab er en Gatekjøkken. Vi tilbyr gatemat som pizza, burgere & kebab "
	/>
	<meta name="robots" content="INDEX,FOLLOW" />
	<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
	<link rel="apple-touch-icon" sizes="57x57" href="assets/img/favicons/apple-icon-57x57.png" />
	<link rel="apple-touch-icon" sizes="60x60" href="assets/img/favicons/apple-icon-60x60.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="assets/img/favicons/apple-icon-72x72.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/favicons/apple-icon-76x76.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="assets/img/favicons/apple-icon-114x114.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="assets/img/favicons/apple-icon-120x120.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="assets/img/favicons/apple-icon-144x144.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="assets/img/favicons/apple-icon-152x152.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicons/apple-icon-180x180.png" />
	<link
		rel="icon"
		type="image/png"
		sizes="192x192"
		href="assets/img/favicons/android-icon-192x192.png"
	/>
	<link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicons/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicons/favicon-96x96.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicons/favicon-16x16.png" />
	<link rel="manifest" href="assets/img/favicons/manifest.json" />
	<meta name="msapplication-TileColor" content="#ffffff" />
	<meta name="msapplication-TileImage" content="assets/img/favicons/ms-icon-144x144.png" />
	<meta name="theme-color" content="#ffffff" />
	<link rel="preconnect" href="https://fonts.googleapis.com/" />
	<link rel="preconnect" href="https://fonts.gstatic.com/" />
	<link
		href="https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&amp;family=Roboto:wght@100;300;400;500;700&amp;family=Rubik:wght@300;400;500;600;700;800;900&amp;display=swap"
		rel="stylesheet"
	/>
	<link rel="stylesheet" href="assets/css/app.min.css" />
	<link rel="stylesheet" href="assets/css/fontawesome.min.css" />
	<link rel="stylesheet" href="assets/css/style.css" />
</head>

<body class="home-dark">
	<!-- <PreLoader /> -->
	<QuickView />
	<PopupSearch />
	<Cart />
	<MobileMenu />
	<OnPcHeader />
	<HeroCarousel />
	<MenuCarousel />
	<Offers />
	<OrderSection />
	<FoodOptionsTotal />
	<MenyTab />
	<CustomFoodHero />
	<PriceList />
	<Testimonies />
	<BlogCarousel />
	<Footer />
	<ScrollToTop />
	<script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
	<script src="assets/js/app.min.js"></script>
	<script src="assets/js/main.js"></script>
</body>
