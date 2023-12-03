<script lang="ts">
	import { patchPocketbase1only } from '$lib/utils/api';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let data: { items: any[] }; // Specify the type for 'data'

	async function handleOrderDelivered(id: any, delivered: any) {
		const orderToUpdate = data.items.find((order: any) => order.id === id);

		if (!orderToUpdate) {
			console.error(`Order with ID ${id} not found.`);
			return;
		}

		try {
			const updatedOrder = await patchPocketbase1only('texbab_orders', id, {
				delivered
			});

			// Update the local data with the response from the server
			data.items = data.items.map((order: any) =>
				order.id === id ? { ...order, delivered: updatedOrder.delivered } : order
			);
			// Emit an event to notify the parent component about the order preparation.
			dispatch('orderdelivered', { id });
		} catch (error) {
			console.error('Failed to update order preparation status.', error);
			// Handle the error, e.g., show a notification to the user.
		}
	}
</script>
<div class="overflow-x-auto mx-auto">
    <table class="table-auto w-full">
        <!-- head -->
        <thead>
            <tr>
                <th />
                <th>id</th>
                <th>status</th>
            </tr>
        </thead>
        <tbody>
            <!-- row 1 -->
            {#each data.items.filter((order) => !order.delivered) as order}
                <tr>
                    <th>
                        <label>
                            <input
                                type="checkbox"
                                class="checkbox"
                                on:click={() => handleOrderDelivered(order.id, true)}
                            />
                        </label>
                    </th>
                    <td>
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img
                                        src={`https://avatars.dicebear.com/api/adventurer-neutral/${order.firstName}.svg`}
                                        alt="Avatar"
                                    />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold text-sm sm:text-base md:text-lg overflow-wrap break-words word-break break-all">{order.id}</div>
                                <div class="text-xs sm:text-sm md:text-base opacity-50 overflow-wrap break-words word-break break-all">{order.firstName} {order.lastName}</div>
                            </div>
                        </div>
                    </td>
                    <td>
						<span class={`badge ${order.delivered ? 'badge-success' : 'badge-warning'} badge-sm overflow-wrap break-words word-break break-all`}>
                            {order.delivered ? 'Delivered' : 'Not Delivered'}
                        </span>
                    </td>
                </tr>
            {/each}
        </tbody>
        <!-- foot -->
        <tfoot>
            <tr>
                <th />
                <th>Id</th>
                <th>Status</th>
            </tr>
        </tfoot>
    </table>
</div>
