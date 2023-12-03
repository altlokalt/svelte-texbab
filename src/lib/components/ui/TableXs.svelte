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
					<td class="font-bold text-sm sm:text-base md:text-lg overflow-wrap break-words word-break break-all" >{order.id}</td>
					<td class="font-bold text-sm sm:text-base md:text-lg overflow-wrap break-words word-break break-all" >{order.firstName} {order.lastName}</td>
					<td class="font-bold text-sm sm:text-base md:text-lg overflow-wrap break-words word-break break-all" >{order.address}</td>
					<td>
						<span class={`badge ${order.delivered ? 'badge-success' : 'badge-warning'} badge-sm overflow-wrap break-words word-break break-all`}>
                            {order.delivered ? 'Delivered' : 'Not Delivered'}
                        </span>
						<span class={`badge ${order.prepared ? 'badge-success' : 'badge-warning'} badge-sm overflow-wrap break-words word-break break-all`}>
                            {order.delivered ? 'Prepared' : 'Not Prepared'}
                        </span>

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
