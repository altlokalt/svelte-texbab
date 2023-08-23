<script lang="ts">
	import RiderDelivery from '$lib/components/RiderDelivery.svelte';
	export let data: any;

	import Map from '@anoram/leaflet-svelte';
	import { onMount } from 'svelte';
	import PocketBase from 'pocketbase';
	const pb = new PocketBase(`${import.meta.env.VITE_PB_URL}`);
	async function getISS() {
		let data = await fetch(`https://api.wheretheiss.at/v1/satellites/25544`);
		let res = await data.json();
		let lat = res.latitude;
		let lng = res.longitude;
		return {
			lat,
			lng
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
					direction: 'right',
					permanent: 'true'
				},
				icon: {
					iconUrl: '/delivery_guy.svg',
					shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
					iconSize: [38, 95],
					shadowSize: [50, 64],
					iconAnchor: [22, 94],
					shadowAnchor: [4, 62],
					popupAnchor: [-3, -76]
				}
			}
		],
		mapID: 'map',
		tilelayers: [
			{
				url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
				attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>`
			}
		]
	};

	let MAP_EL: any;

	async function init() {
		setInterval(async () => {
			let latlng = await getISS();
			let marker = {
				lat: latlng.lat,
				lng: latlng.lng,
				tooltip: {
					isOpen: false,
					text: `International Svelte Station`,
					direction: 'top',
					sticky: 'true'
				},
				icon: {
					iconUrl: '/delivery_guy.svg',
					iconSize: [48, 48]
				}
			};
			MAP_EL.updateMarkers({
				markers: [marker]
			});
		}, 5000);
	}

	let tracking = false;
	let lastDataTimestamp = 0;
	let intervalId: any;

	// Load tracking state and timestamp on mount (client-side only)
	onMount(() => {
		tracking = localStorage.getItem('tracking') === 'true';
		lastDataTimestamp = parseInt(localStorage.getItem('lastDataTimestamp')) || 0;
	});

	async function startTracking() {
		tracking = true;

		intervalId = setInterval(sendLocationToPocketBase, 1000);
		localStorage.setItem('tracking', 'true');
		console.log('Tracking started');
	}

	function stopTracking() {
		tracking = false;
		clearInterval(intervalId);
		localStorage.setItem('tracking', 'false');
		console.log('Tracking stopped');
	}

	async function sendLocationToPocketBase() {
		try {
			const position: any = await new Promise((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(resolve, reject);
			});

			const data = {
				rider: 'azycy3juysurhhv',
				orderid: 'jlzuuw4p5erueeb',
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			//const test = await pb.collection('texbab_rider').update('tt1vrf3b6z68ib4', data);
			const test = await pb.collection('texbab_rider').create(data);

			if (response) {
				console.log('Location sent to PocketBase');
				lastDataTimestamp = Date.now();
				localStorage.setItem('lastDataTimestamp', lastDataTimestamp.toString());
			} else {
				console.error('Failed to send location to PocketBase');
			}
		} catch (error) {
			console.error('Error sending location:', error);
		}
	}
</script>

<svelte:head>
	<title>Deliveries overview</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1 w-full">
	<h1>Deliveries overview</h1>
	<button
		class="py-2 px-4 rounded font-bold bg-red-500 hover:bg-red-700"
		class:bg-green-500={!tracking}
		class:bg-green-700={!tracking}
		on:click={tracking ? stopTracking : startTracking}
	>
		{tracking ? 'Stop Delivery' : 'Start Delivery'}
	</button>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
		<div class="h-96 w-full">
			<Map {options} bind:this={MAP_EL} on:ready={init} />
		</div>
		<div class="w-full">
			<RiderDelivery data={data.orders} />
		</div>
	</div>
</section>

