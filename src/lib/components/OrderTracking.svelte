<!-- src/OrderTracking.svelte -->
<script>
  import { onMount } from 'svelte';
  import L from 'leaflet';
  import axios from 'axios';

  let map;
  let orders = [];

  onMount(async () => {
    map = L.map('map').setView([13, 80], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Fetch orders data from the backend API (replace 'YOUR_API_URL' with your actual API URL)
    const response = await axios.get('YOUR_API_URL/orders');
    orders = response.data;

    // Plot markers on the map for each order
    orders.forEach((order) => {
      const { latitude, longitude } = order.location;
      L.marker([latitude, longitude]).addTo(map).bindPopup(order.status);
    });

    // Update order status in real-time (you will need to set up a WebSocket or use a polling mechanism)
    // For demonstration purposes, I'll use a setInterval to simulate real-time updates
    setInterval(async () => {
      const response = await axios.get('YOUR_API_URL/orders');
      orders = response.data;

      orders.forEach((order) => {
        const marker = map.getLayers().find((layer) => layer.getLatLng().equals([order.location.lat, order.location.lng]));
        if (marker) {
          marker.setPopupContent(order.status);
        }
      });
    }, 5000); // Update every 5 seconds
  });
</script>

<style>
  #map {
    width: 100%;
    height: 600px; /* Changed height to 600px to match the style provided in the other version */
  }
</style>

<div id="map">
  <!-- Removed the <Map> component as it's no longer used -->
</div>
