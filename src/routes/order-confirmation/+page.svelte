<script lang="ts">
	import { onMount } from "svelte";

	import { writable } from "svelte/store";

	let orderid

	const orderidStore = writable(orderid);
	
	import OrderConfirmation from "$lib/components/OrderConfirmation.svelte";
	// OrderTracking
	import type { LatLngExpression } from "leaflet";
	import Leaflet from "$lib/components/map/Leaflet.svelte";
	import Marker from "$lib/components/map/Marker.svelte";
	import Popup from "$lib/components/map/Popup.svelte";

	const initialView: LatLngExpression = [59.356131420076714, 10.438487595706526]; // Horten, Norway
	const markerLocations: Array<LatLngExpression> = [
		[59.35593987077508, 10.43815570209242] // Road right outside the restaurant
	];

	onMount(() => {
		
		const params = new URLSearchParams(window.location.search);
		orderid = params.get("orderid");
		orderidStore.set(orderid);
		console.log(orderid)
	});

	import Map from "@anoram/leaflet-svelte";
  async function getISS() {
    let data = await fetch(`https://api.wheretheiss.at/v1/satellites/25544`);
    let res = await data.json();
    let lat = res.latitude;
    let lng = res.longitude;
    return {
      lat,
      lng,
    };
  }
  let options = {
    recenter: true,
    center: [59.4109, 10.465],
    zoom: 14,
    markers: [
      {
        lat: 59.4109,
        lng: 10.4655,
        tooltip: {
          isOpen: true,
          text: `Permanant Tooltip`,
          direction: "right",
          permanent: "true",
        },
		icon: {
          iconUrl: "https://icon-library.com/images/marker-icon/marker-icon-26.jpg",
          shadowUrl:
            "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
          iconSize: [95, 95],
          shadowSize: [50, 64],
          iconAnchor: [22, 94],
          shadowAnchor: [4, 62],
          popupAnchor: [-3, -76],
        },
      },
    ],
    mapID: "map",
    tilelayers: [
      {
        url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>`,
      },
    ],
  };

  let MAP_EL;

  async function init() {
    setInterval(async () => {
      let latlng = await getISS();
      let marker = {
        lat: latlng.lat,
        lng: latlng.lng,
        tooltip: {
          isOpen: false,
          text: `International Svelte Station`,
          direction: "top",
          sticky: "true",
        },
        icon: {
          iconUrl: "/delivery_guy.svg",
          iconSize: [48, 48],
        },
      };
      MAP_EL.updateMarkers({
        markers: [marker],
      });
    }, 5000);
  }
</script>

<svelte:head>
	<title>OrderConfirmation</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1">
	<OrderConfirmation orderid={orderid} />
	<ul class="steps">
		<li class="step step-primary">Order received</li>
		<li class="step step-primary">Food is being prepared</li>
		<li class="step">Food is on the way</li>
		<li class="step">Successful delivery</li>
	</ul>

	
	<!--OrderTracking>
	<div class="w-full h-screen">
		<Leaflet view={initialView} zoom={18}>
			{#each markerLocations as latLng}
				<Marker {latLng} width={70} height={70}>
					<img src="/delivery_guy.svg" alt="delivery guy riding a bike" />
					<Popup>Like & Subscribe!</Popup>
				</Marker>
			{/each}
		</Leaflet>
	</div-->
</section>
<div class="map">
	<Map {options}  bind:this={MAP_EL} on:ready={init} />
</div>

<style>
	.map {
    height: 600px;
    width: auto;
  }
</style>
