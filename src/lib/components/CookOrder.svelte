<!-- src/CookOrder.svelte -->
<script lang="ts">



  export let data: any;

  function handleOrderPrepared(id: any) {
    data = data.map((order: any) => {
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
    {#each data as order}
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
