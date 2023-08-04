<!-- src/CookOrder.svelte -->
<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { patchPocketbase } from "$lib/utils/api";
	import VisualTable from "./ui/VisualTable.svelte";
	import VisualTable2 from "./ui/VisualTable2.svelte";
	import TableXs from "./ui/TableXs.svelte";

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

<!-- Orders to be prepared -->
<div class="border border-gray-300 p-4 mb-4">
  <h2 class="text-lg font-semibold mb-4">Orders to be prepared:</h2>
  <VisualTable  {data} />
</div>

<!-- Prepared but not delivered orders -->
<div class="border border-gray-300 p-4 mb-4">
  <h2 class="text-lg font-semibold mb-4">Prepared but not delivered:</h2>
  <VisualTable2  {data} />
</div>

<!-- Prepared and delivered orders -->
<div class="border border-gray-300 p-4 mb-4">
  <h2 class="text-lg font-semibold mb-4">Prepared and delivered:</h2>
  <TableXs  {data} />
</div>