<!-- src/CookOrder.svelte -->
<script lang="ts">
	import VisualTable from './ui/VisualTable.svelte';
	import VisualTable2 from './ui/VisualTable2.svelte';
	import TableXs from './ui/TableXs.svelte';

	export let data: { items: any[] }; // Specify the type for 'data'
</script>

<!-- Orders to be prepared -->
<div class="border border-primary p-4 mb-4">
	<h2 class="text-lg font-semibold mb-4">Orders to be prepared:</h2>
	<VisualTable {data} />
</div>

<!-- Prepared but not delivered orders -->
<div class="border border-primary p-4 mb-4">
	<h2 class="text-lg font-semibold mb-4">Prepared but not delivered:</h2>
	<VisualTable2 {data} />
</div>

<!-- Prepared and delivered orders -->
<div class="border border-primary p-4 mb-4">
	<h2 class="text-lg font-semibold mb-4">Prepared and delivered:</h2>
	<TableXs {data} />
</div>
