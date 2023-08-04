<!-- src/CookOrder.svelte -->
<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { patchPocketbase } from "$lib/utils/api";

  export let data: { items: any[] }; // Specify the type for 'data'

const dispatch = createEventDispatcher();

async function handleOrderPrepared(id: any, prepared: any) {
  console.log(`Preparing order ${id}...`);
  const orderToUpdate = data.items.find((order: any) => order.id === id);

  if (!orderToUpdate) {
    console.error(`Order with ID ${id} not found.`);
    return;
  }

  console.log(`Order ${id} preparation status:`, orderToUpdate.prepared);

  try {
    console.log(`Updating order ${id} preparation status...`);
    const updatedOrder = await patchPocketbase(`texbab_orders/records/${id}`, {
      prepared
    });

    console.log(`Order ${id} preparation status updated successfully.`, updatedOrder);

    // Update the local data with the response from the server
    data.items = data.items.map((order: any) =>
      order.id === id ? { ...order, prepared: updatedOrder.prepared } : order
    );
    // Emit an event to notify the parent component about the order preparation.
    dispatch("orderPrepared", { id });
  } catch (error) {
    console.error("Failed to update order preparation status.", error);
    // Handle the error, e.g., show a notification to the user.
  }
}

</script>

<style>
  /* Add any custom styles here */
</style>


<!-- Orders to be prepared -->
<div class="border border-gray-300 p-4 mb-4">
  <h2 class="text-lg font-semibold mb-4">Orders to be prepared:</h2>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each data.items.filter((order) => !order.prepared) as order}
      <li class="border rounded-lg p-4 flex items-center">
        <label class="flex items-center space-x-2 cursor-pointer">
          <button
            class="form-checkbox h-4 w-4 text-indigo-600"
            on:click={() => handleOrderPrepared(order.id, true)}
          />
          <span class="text-sm font-medium">{order.id}</span>
          <span class="text-sm">- {order.firstName} {order.lastName}</span>
          <span class="ml-auto">
            {#if order.prepared}
              <span class="px-2 py-1 rounded-lg bg-green-500 text-white text-xs">Prepared</span>
            {:else}
              <span class="px-2 py-1 rounded-lg bg-red-500 text-white text-xs">Not Prepared</span>
            {/if}
          </span>
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

<!-- Prepared but not delivered orders -->
<div class="border border-gray-300 p-4 mb-4">
  <h2 class="text-lg font-semibold mb-4">Prepared but not delivered:</h2>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each data.items.filter((order) => order.prepared && !order.delivered) as order}
      <li class="border rounded-lg p-4 flex items-center">
        <label class="flex items-center space-x-2 cursor-pointer">
          <button
          class="form-checkbox h-4 w-4 text-indigo-600"
          on:click={() => handleOrderPrepared(order.id, false)}
        />
          <span class="text-sm font-medium">{order.id}</span>
          <span class="text-sm">- {order.firstName} {order.lastName}</span>
          <span class="ml-auto">
            {#if order.prepared}
              <span class="px-2 py-1 rounded-lg bg-green-500 text-white text-xs">Prepared</span>
            {:else}
              <span class="px-2 py-1 rounded-lg bg-red-500 text-white text-xs">Not Prepared</span>
            {/if}
          </span>
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

<!-- Prepared and delivered orders -->
<div class="border border-gray-300 p-4 mb-4">
  <h2 class="text-lg font-semibold mb-4">Prepared and delivered:</h2>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each data.items.filter((order) => order.prepared && order.delivered) as order}
      <li class="border rounded-lg p-4 flex items-center">
        <label class="flex items-center space-x-2 cursor-pointer">
          <button
          class="form-checkbox h-4 w-4 text-indigo-600"
        />
          <span class="text-sm font-medium">{order.id}</span>
          <span class="text-sm">- {order.firstName} {order.lastName}</span>
          <span class="ml-auto">
            {#if order.prepared}
              <span class="px-2 py-1 rounded-lg bg-green-500 text-white text-xs">prepared</span>
            {:else}
              <span class="px-2 py-1 rounded-lg bg-red-500 text-white text-xs">Not prepared</span>
            {/if}
          </span>
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