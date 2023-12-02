<script lang="ts">
	import { page } from '$app/stores'
	let site_name = $page.data.siteName
</script>

<div
	class="hero min-h-screen"
	style="background-image: url({import.meta.env
		.VITE_PB_URL}/api/files/texbab_burger/wpjb8f7r8vu8ikd/pizza_3O6P9DTPPR.jpg);"
>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Velkommen til {site_name}</h1>
			<p class="mb-5">
				Opplev våre smakfulle retter tilberedt med kjærlighet av våre dyktige kokker. Bestill nå og
				nyt en eksepsjonell matopplevelse!
			</p>
			<a class="btn btn-primary" href="/menu">Bestill mat</a>
		</div>
	</div>
</div>
