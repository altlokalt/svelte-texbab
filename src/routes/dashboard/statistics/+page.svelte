<script>
</script>

<svelte:head>
	<title>Statistics</title>
</svelte:head>

<div
	class="flex flex-col items-center justify-center min-w-screen w-full bg-gradient-to-b from-secondary to-base-200"
>
	<div class="bg-base shadow-lg rounded-lg p-8 space-y-4">
		<h1 class="text-3xl font-semibold text-center text-secondary-content">Statistics Page</h1>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<a
				href="/dashboard/statistics/call-stats"
				class="p-4 border border-base-300 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:text-primary-content"
			>
				<h5 class="text-lg font-semibold text-center text-secondary-content">call-stats</h5>
			</a>
			<a
				href="/dashboard/statistics/finances"
				class="p-4 border border-base-300 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:text-primary-content"
			>
				<h5 class="text-lg font-semibold text-center text-secondary-content">
					finances
				</h5>
			</a>
			<a
			href="/dashboard/statistics/food-logs"
			class="p-4 border border-base-300 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:text-primary-content"
		>
			<h5 class="text-lg font-semibold text-center text-secondary-content">
				food logs
			</h5>
		</a>
		</div>
			
	</div>
</div>
