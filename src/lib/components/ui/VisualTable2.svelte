<script lang="ts">
	import { patchPocketbase } from '$lib/utils/api';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let data: { items: any[] }; // Specify the type for 'data'

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
			dispatch('orderPrepared', { id });
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
				<th>name</th>
				<th>status</th>
				<th />
			</tr>
		</thead>
		<tbody>
			<!-- row 1 -->
            {#each data.items.filter((order) => order.prepared && !order.delivered) as order}
				<tr>
					<th>
						<label>
							<input
								type="checkbox"
								class="checkbox"
								on:click={() => handleOrderPrepared(order.id, false)}
							/>
						</label>
					</th>
					<td>
						<div class="flex items-center space-x-3">
							<div class="avatar">
								<div class="mask mask-squircle w-12 h-12">
									<img
										src="https://api.texbab.no/api/files/vi08f0m1bznkfa3/lx41drdyghi9vpt/ingenbildetilgjengelig_3a5TR8Uzgq.webp"
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
							</div>
							<div>
								<div class="font-bold">{order.id}</div>
								<div class="text-sm opacity-50">{order.address}</div>
							</div>
						</div>
					</td>
					<td>
						{order.firstName}
						<br />
						<span class="badge badge-ghost badge-sm">{order.lastName}</span>
					</td>
					{#if order.prepared}
						<td>
							<span class="badge badge-success badge-sm">Prepared</span>
						</td>
					{:else}
						<td>
							<span class="badge badge-warning badge-sm">Not Prepared</span>
						</td>
					{/if}
					<th>
						<button class="btn btn-ghost btn-xs">details</button>
					</th>
				</tr>
			{/each}
		</tbody>
		<!-- foot -->
		<tfoot>
			<tr>
				<th />
				<th>Id</th>
				<th>Name</th>
				<th>Status</th>
				<th />
			</tr>
		</tfoot>
	</table>
</div>
