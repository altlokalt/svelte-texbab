<script lang="ts">
	import { patchPocketbase1only } from '$lib/utils/api';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let data: { items: any[] }; // Specify the type for 'data'

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
			const updatedOrder = await patchPocketbase1only('texbab_orders', id, {
				delivered
			});

			console.log(`Order ${id} preparation status updated successfully.`, updatedOrder);

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

<div class="overflow-x-auto">
	<table class="table">
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
			{#each data.items.filter((order) => order.delivered) as order}
				<tr>
					<th>
						<label>
							<input
								type="checkbox"
								class="checkbox"
								on:click={() => handleOrderDelivered(order.id, false)}
							/>
						</label>
					</th>
					<td>
						<div class="flex items-center space-x-3">
							<div class="avatar">
								<div class="mask mask-squircle w-12 h-12">
									<img
										src={`https://avatars.dicebear.com/api/adventurer-neutral/${order.firstName}.svg`}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
							</div>
							<div>
								<div class="font-bold">{order.id}</div>
								<div class="text-sm opacity-50">{order.firstName} {order.lastName}</div>
							</div>
						</div>
					</td>

					<td>
						{#if order.delivered}
							<span class="badge badge-success badge-sm">Delivered</span>
						{:else}
							<span class="badge badge-warning badge-sm">Not Delivered</span>
						{/if}
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
