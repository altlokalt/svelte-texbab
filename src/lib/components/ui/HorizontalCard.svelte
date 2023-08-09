<script lang="ts">
	export let title: any;
	export let img: any;
	export let url: any;
</script>

<div class="card card-side bg-base-100 shadow-xl md:w-1/3 mx-4 my-4 flex-shrink-0">
	<figure>
		<img
			src={img}
			alt={`bilde anv texbab.no ${title} meny`}
			class="h-full md:h-full w-5/7 object-cover max-h-48"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title">{title} meny</h2>
		<p class="text-xs">Sjekk ut vår {title} meny.</p>
		<div class="card-actions justify-end">
			<a class="btn btn-primary" href={url}>Bestill</a>
		</div>
	</div>
</div>
