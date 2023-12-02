<script lang="ts">
	export let data: { items: any[] }; // Specify the type for 'data'
</script>

<div class="overflow-x-auto">
	<table class="table table-xs">
		<thead>
			<tr>
				<th>ID</th>
				<th>Name</th>
				<th>location</th>
				<th>status</th>
			</tr>
		</thead>
		<tbody>
			{#each data.items.filter((order) => order.prepared && order.delivered) as order}
				<tr>
					<td>{order.id}</td>
					<td>{order.firstName} {order.lastName}</td>
					<td>{order.address}</td>
					<td>
						{#if order.prepared}
							<span class="badge badge-success badge-sm">Prepared</span>
						{:else}
							<span class="badge badge-warning badge-sm">Not Prepared</span>
						{/if}

						{#if order.delivered}
							<span class="badge badge-success badge-sm">Delivered</span>
						{:else}
							<span class="badge badge-warning badge-sm">Not Delivered</span>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th>ID</th>
				<th>Name</th>
				<th>location</th>
				<th>status</th>
			</tr>
		</tfoot>
	</table>
</div>
