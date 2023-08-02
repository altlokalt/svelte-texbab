<!-- src/RiderDelivery.svelte -->
<script>
  let deliveries = [
    { id: 1, name: "Delivery 1", location: "Some Location 1", delivered: false },
    { id: 2, name: "Delivery 2", location: "Some Location 2", delivered: false },
    // Add more deliveries here as needed
  ];

  function handleDeliveryCheck(id) {
    deliveries = deliveries.map((delivery) => {
      if (delivery.id === id) {
        return { ...delivery, delivered: true };
      }
      return delivery;
    });
  }
</script>

<div class="border border-gray-300 p-4 mb-4">
  <h2 class="text-lg font-semibold">Deliveries to be made:</h2>
  <ul class="mt-2">
    {#each deliveries as delivery}
      <li class="flex items-center">
        <input
          type="checkbox"
          class="form-checkbox h-4 w-4 text-indigo-600"
          bind:checked={delivery.delivered}
          on:change={() => handleDeliveryCheck(delivery.id)}
        />
        <span class="ml-2">{delivery.name} - {delivery.location}</span>
      </li>
    {/each}
  </ul>
</div>
