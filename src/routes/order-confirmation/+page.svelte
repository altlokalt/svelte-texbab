<script lang="ts">
	import OrderConfirmation from "$lib/components/OrderConfirmation.svelte";
	// OrderTracking
	import type { LatLngExpression } from 'leaflet';
	import Leaflet from '$lib/components/map/Leaflet.svelte';
	import Marker from '$lib/components/map/Marker.svelte';
	import Popup from '$lib/components/map/Popup.svelte';

	const initialView: LatLngExpression = [59.356131420076714, 10.438487595706526]; // Horten, Norway
	const markerLocations: Array<LatLngExpression> = [
		[59.35593987077508, 10.43815570209242] // Road right outside the restaurant
	];
</script>

<svelte:head>
	<title>OrderConfirmation</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1">
	<OrderConfirmation />
	<ul class="steps">
	  <li class="step step-primary">Order received</li>
	  <li class="step step-primary">Food is being prepared</li>
	  <li class="step">Food is on the way</li>
	  <li class="step">Succesful delivery</li>
	</ul>

	<!--OrderTracking-->
	<div class="w-full h-screen">
		<Leaflet view={initialView} zoom={18}>
			{#each markerLocations as latLng}
				<Marker {latLng} width={70} height={70}>
					<!-- ShipBit Icon -->
					<img src="/delivery_guy.svg" alt="delivery guy riding a bike" />
					<Popup>Like & Subscribe!</Popup>
				</Marker>
			{/each}
		</Leaflet>
	</div>
</section>

<style>
</style>
