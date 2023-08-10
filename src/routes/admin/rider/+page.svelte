<script >
	import RiderDelivery from '$lib/components/RiderDelivery.svelte';
	export let data;


	import Map from "@anoram/leaflet-svelte";
  //https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png
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

  /**
	 * @type {{ updateMarkers: (arg0: { markers: { lat: any; lng: any; tooltip: { isOpen: boolean; text: string; direction: string; sticky: string; }; icon: { iconUrl: string; iconSize: number[]; }; }[]; }) => void; }}
	 */
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
          iconUrl: "./iss.webp",
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

	<RiderDelivery {data} />

	<div class="map">
		<Map {options}  bind:this={MAP_EL} on:ready={init} />
	</div>
	 
</section>

<style>
	.map {
		height: 600px;
		width: auto;
	  }
</style>

