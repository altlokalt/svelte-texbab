<script lang="ts">
	import RiderDelivery from '$lib/components/RiderDelivery.svelte';
	export let data: any;

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
          iconUrl: "/delivery_guy.svg",
          shadowUrl:
            "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
          iconSize: [38, 95],
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
	<title>Deliveries overview</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>



  
<section class="flex flex-col justify-center items-center flex-1">
	<div class="flex items-center">
		<a href="/admin" class="text-indigo-600 underline"
			><span class="mdi mdi-restore" />
			Back to Admin</a
		>
		<h2 class="mr-4">Rider</h2>
	</div>

	<h1>Deliveries overview</h1>



</section>

<div class="h-96 w-full md:w-1/2 ">
  <Map {options}  bind:this={MAP_EL} on:ready={init} />
</div>

<RiderDelivery {data} />


