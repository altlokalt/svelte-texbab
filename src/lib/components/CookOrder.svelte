<!-- src/CookOrder.svelte -->
<script>
  let orders = [
    { id: 1, name: "Order 1", items: "Item 1, Item 2", prepared: false },
    { id: 2, name: "Order 2", items: "Item 3, Item 4", prepared: false },
    // Add more orders here as needed
  ];

  function handleOrderPrepared(id) {
    orders = orders.map((order) => {
      if (order.id === id) {
        return { ...order, prepared: true };
      }
      return order;
    });
  }
</script>

<div class="border border-gray-300 p-4 mb-4">
  <h2 class="text-lg font-semibold">Orders to be prepared:</h2>
  <ul class="mt-2">
    {#each orders as order}
      <li class="flex items-center">
        <input
          type="checkbox"
          class="form-checkbox h-4 w-4 text-indigo-600"
          bind:checked={order.prepared}
          on:change={() => handleOrderPrepared(order.id)}
        />
        <span class="ml-2">{order.name} - Items: {order.items}</span>
      </li>
    {/each}
  </ul>
</div>
