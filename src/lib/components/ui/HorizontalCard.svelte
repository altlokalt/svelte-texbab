<script lang="ts">
	export let title: any;
	export let img: any;
	export let url: any;
</script>

<a href={url} target="_self" class="grid grid-cols-1 sm:grid-cols-2 gap-2 w-96 mx-4 bg-neutral text-neutral-content rounded-md " >
	<div class="w-full">
		<figure class="w-full h-full rounded-lg overflow-hidden">
			<img src={img} alt={`bilde anv texbab.no ${title} meny`} class="h-full w-full object-cover" />
		</figure>
	</div>
	<div>
		<div class="card-body  ">
			<h2 class="text-lg font-semibold">{title}</h2>
			<p class="text-xs">Sjekk ut {title}.</p>
			<div class="card-actions justify-end">
				<div
					class="btn-primary text-sm font-semibold px-3 py-1 rounded-full bg-primary hover:bg-accent-dark"
				>
					Bestill
				</div>
			</div>
		</div>
	</div>
</a>
