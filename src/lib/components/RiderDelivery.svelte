<!-- src/CookOrder.svelte -->
<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { patchPocketbase } from "$lib/utils/api";

  export let data: { items: any[] }; // Specify the type for 'data'

const dispatch = createEventDispatcher();

async function handleOrderDelivered(id: any, delivered: any) {
  console.log(`Preparing order ${id}...`);
  const orderToUpdate = data.items.find((order: any) => order.id === id);

  if (!orderToUpdate) {
    console.error(`Order with ID ${id} not found.`);
    return;
  }

  console.log(`Order ${id} preparation status:`, orderToUpdate.delivered);

  try {
    console.log(`Updating order ${id} preparation status...`);
    const updatedOrder = await patchPocketbase(`texbab_orders/records/${id}`, {
      delivered
    });

    console.log(`Order ${id} preparation status updated successfully.`, updatedOrder);

    // Update the local data with the response from the server
    data.items = data.items.map((order: any) =>
      order.id === id ? { ...order, delivered: updatedOrder.delivered } : order
    );
    // Emit an event to notify the parent component about the order preparation.
    dispatch("orderdelivered", { id });
  } catch (error) {
    console.error("Failed to update order preparation status.", error);
    // Handle the error, e.g., show a notification to the user.
  }
}

</script>

<style>
  /* Add any custom styles here */
</style>


<!-- Orders to be delivered -->
<div class="border border-gray-300 p-4 mb-4">
  <h2 class="text-lg font-semibold mb-4">Orders to be delivered:</h2>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each data.items.filter((order) => !order.delivered) as order}
      <li class="border rounded-lg p-4 flex items-center">
        <label class="flex items-center space-x-2 cursor-pointer">
          <button
            class="form-checkbox h-4 w-4 text-indigo-600"
            on:click={() => handleOrderDelivered(order.id, true)}
          />
          <span class="text-sm font-medium">{order.id}</span>
          <span class="text-sm">- {order.firstName} {order.lastName}</span>
          <span class="ml-auto">
            {#if order.delivered}
              <span class="px-2 py-1 rounded-lg bg-green-500 text-white text-xs">delivered</span>
            {:else}
              <span class="px-2 py-1 rounded-lg bg-red-500 text-white text-xs">Not delivered</span>
            {/if}
          </span>
          
        </label>
      </li>
    {/each}
  </ul>
</div>


<!--delivered orders -->
<div class="border border-gray-300 p-4 mb-4">
  <h2 class="text-lg font-semibold mb-4">Delivered:</h2>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each data.items.filter((order) => order.delivered) as order}
      <li class="border rounded-lg p-4 flex items-center">
        <label class="flex items-center space-x-2 cursor-pointer">
          <button
          class="form-checkbox h-4 w-4 text-indigo-600"
          on:click={() => handleOrderDelivered(order.id, false)}
        />
          <span class="text-sm font-medium">{order.id}</span>
          <span class="text-sm">- {order.firstName} {order.lastName}</span>
          <span class="ml-auto">
            {#if order.delivered}
              <span class="px-2 py-1 rounded-lg bg-green-500 text-white text-xs">delivered</span>
            {:else}
              <span class="px-2 py-1 rounded-lg bg-red-500 text-white text-xs">Not delivered</span>
            {/if}
          </span>
        </label>
      </li>
    {/each}
  </ul>
</div>