<script lang="ts">
  import { onMount } from 'svelte';

	import type { LatLngExpression } from 'leaflet';
	import Leaflet from '$lib/components/map/Leaflet.svelte';
	import Marker from '$lib/components/map/Marker.svelte';
	import Popup from '$lib/components/map/Popup.svelte';
  import PriceMarker from '$lib/components/map/PriceMarker.svelte';
	import PricePopup from '$lib/components/map/PricePopup.svelte';



	const initialView: LatLngExpression = [51.514244, 7.468429]; // Dortmund, Germany
	const markerLocations: Array<LatLngExpression> = [
		[51.513870009926, 7.473969975241], // ShipBit Office
    [51.59775770648001, 7.337739928381087], // ShipBit Office
    [51.57557276231707, 7.630937535019824], // ShipBit Office
	];

  const markerData = [
    { id: 1, latLng: [51.50370009926, 7.483969975241], price: 20, more: 'This is the cheapest option' },
    { id: 2, latLng: [51.503770648001, 7.45339928381087], price: 80, more: 'This is very expensive' },
    { id: 3, latLng: [51.5038242276231707, 7.477535019824], price: 40, more: 'This a middle price not cheap nor expensive' },
    { id: 4, latLng: [51.50382427638138, 7.463396045511974], price: 0, more: 'This price is not valid' },
    // Add more marker locations with prices and ids here
  ];


  let mapKey = 0;
  onMount(() => {
    // This will trigger a re-render of the map when mapKey changes
    // It's important to note that the onMount block ensures this code runs after the initial render
  });

  function changeMarkerLocation() {
    const markerIndex = markerData.findIndex((marker) => marker.id === 4);

    if (markerIndex !== -1) {
      markerData[markerIndex].latLng = [51.60841968929518, 7.464769336409579];
    }

    // Update mapKey to trigger a re-render of the map
    mapKey += 1;
  }
  console.log(mapKey);

</script>

<form class="p-4" method="POST" id="routing-form" required>
  <div class="mb-4">
    <input
      autocapitalize="none"
      id="start"
      class="input is-primary w-full"
      name="start"
      autocomplete="off"
      placeholder="Startsted: f.eks horten"
      autocorrect="off"
      spellcheck="false"
      tabindex="0"
      type="text"
      aria-autocomplete="list"
      required
    />
  </div>

  <div class="mb-4">
    <input
      id="destination"
      class="input is-primary w-full"
      name="destination"
      autocapitalize="none"
      autocomplete="off"
      placeholder="Destinasjon"
      autocorrect="off"
      spellcheck="false"
      tabindex="0"
      type="text"
      aria-autocomplete="list"
      required
    />
  </div>

  <div class="autocom-box notranslate" id="resultss">
    <li onclick="selectB(this)">tønsberg</li>
  </div>

  <div class="flex items-center justify-center mb-4">
    <input type="checkbox" id="myCheckbox2" name="-3t" class="hidden" />
    <label for="myCheckbox2" class="cursor-pointer">
      <i class="fa fa-car text-2xl"></i>
    </label>
    <input type="checkbox" id="myCheckbox3" name="+3t" class="hidden" />
    <label for="myCheckbox3" class="cursor-pointer">
      <i class="fa fa-truck text-2xl"></i>
    </label>
  </div>

  <div class="flex items-center justify-center mb-4">
    <div class="select is-primary">
      <select name="cars" class="css-1uccc91-singleValue">
        <option value="Bensin">Bensin</option>
        <option value="Diesel">Diesel</option>
        <option value="Elbil">Elbil</option>
        <option value="Ladbar Hybrid">Ladbar Hybrid</option>
        <option value="Hydrogen">Hydrogen</option>
      </select>
    </div>
  </div>

  <div class="toggle-0-2-22 mb-4">
    <input
      type="checkbox"
      class="checkbox hidden"
      id="drive-mode"
      name="drive-mode"
      value="drive-mode"
    />
  </div>

  <div class="flex justify-center">
    <button
      class="button is-warning py-2 px-4 rounded-lg"
      type="submit"
      style="cursor: pointer;"
      value="Beregn"
      id="beregn"
    >
      BEREGN
    </button>
  </div>
</form>

<div class="flex justify-center">
  <button class="button is-primary py-2 px-4 rounded-lg" on:click={changeMarkerLocation}>
    Change Marker Location
  </button>
</div>

<div class="w-full h-screen">
	<Leaflet view={initialView} zoom={14}>
	{#each markerData as data, index}
     <!-- Use data.latLng to set the position of the circle svg -->
    <PriceMarker latLng={data.latLng} width={40} height={40}>
      <!-- ShipBit Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="64" height="64">
        <circle r="15" cx="32" cy="32" style="fill:{data.price === 0 ? 'white' : data.price >= 50 ? 'green' : data.price >= 40 ? 'yellow' : data.price <= 50 ? 'red' : 'white'};stroke:gray;stroke-width:0.1"/>
      </svg>

      <PricePopup>{data.more}</PricePopup>
    </PriceMarker>
  {/each}

	</Leaflet>
</div>