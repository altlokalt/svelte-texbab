<script lang="ts">
	import { patchPocketbase1only } from '$lib/utils/api';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let data: { items: any[] }; // Specify the type for 'data'

	async function handleOrderPrepared(id: any, prepared: any) {
		const orderToUpdate = data.items.find((order: any) => order.id === id);

		if (!orderToUpdate) {
			console.error(`Order with ID ${id} not found.`);
			return;
		}

		try {
			const updatedOrder = await patchPocketbase1only('texbab_orders', id, {
				prepared
			});

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

<div class="overflow-x-auto mx-auto border-primary">
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
										src={`https://avatars.dicebear.com/api/adventurer-neutral/${order.firstName}.svg`}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
							</div>
							<div>
								<div class="text-sm font-bold overflow-wrap break-words word-break break-all">
									{order.id}
								</div>
								<div class="text-sm opacity-50 overflow-wrap break-words word-break break-all">
									{order.firstName}
									{order.lastName}
								</div>
							</div>
						</div>
					</td>

					<td>
						<span
							class={`badge ${
								order.delivered ? 'badge-success' : 'badge-warning'
							} badge-sm overflow-wrap break-words word-break break-all`}
						>
							{order.delivered ? 'Delivered' : 'Not Delivered'}
						</span>
						<span
							class={`badge ${
								order.prepared ? 'badge-success' : 'badge-warning'
							} badge-sm overflow-wrap break-words word-break break-all`}
						>
							{order.delivered ? 'Prepared' : 'Not Prepared'}
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
