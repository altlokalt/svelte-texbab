<script lang="ts">
	 let site_name = `${import.meta.env.VITE_SITE_NAME}`;
	 let site_logo =`${import.meta.env.VITE_SITE_LOGO}`;
	
</script>

<div
	class="hero min-h-screen"
	style="background-image: url({import.meta.env.VITE_PB_URL}/api/files/texbab_burger/wpjb8f7r8vu8ikd/pizza_3O6P9DTPPR.jpg);"
>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Velkommen til {site_name}</h1>
			<p class="mb-5">
				Opplev våre smakfulle retter tilberedt med kjærlighet av våre dyktige kokker. Bestill nå og
				nyt en eksepsjonell matopplevelse!
			</p>
			<a class="btn btn-primary" href="/barne">Bestill mat</a>
		</div>
	</div>
</div>
