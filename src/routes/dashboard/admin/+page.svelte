<script>
</script>

<svelte:head>
	<title>Admin</title>
</svelte:head>

<div
	class="flex flex-col items-center justify-center min-w-screen w-full bg-gradient-to-b from-secondary to-base-200"
>
	<div class="bg-base shadow-lg rounded-lg p-8 space-y-4">
		<h1 class="text-3xl font-semibold text-center text-secondary-content">Admin Page</h1>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<a
				href="/dashboard/admin/chef"
				class="p-4 border border-base-300 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:text-primary-content"
			>
				<h5 class="text-lg font-semibold text-center text-secondary-content">chef</h5>
			</a>
			<a
				href="/dashboard/admin/rider"
				class="p-4 border border-base-300 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:text-primary-content"
			>
				<h5 class="text-lg font-semibold text-center text-secondary-content">Rider</h5>
			</a>
		</div>
	</div>
</div>
