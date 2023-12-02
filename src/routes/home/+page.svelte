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
	<CustomFoodHero />
	<MenuCarousel />
	<Offers />
	<OrderSection />
	<FoodOptionsTotal />
	<MenyTab />
	<PriceList />
	<Testimonies />
	<BlogCarousel />
	<Footer />
	<ScrollToTop />
	<script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
	<script src="assets/js/app.min.js"></script>
	<script src="assets/js/main.js"></script>
</body>
