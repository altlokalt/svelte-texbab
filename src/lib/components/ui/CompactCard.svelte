<script lang="ts">
	import Icon from '@iconify/svelte';
	export let item: any; // Specify the type for 'data'
	export let addToCart: any;
	let quantity = 0;
	import { getImage } from '$lib/utils/api';

	let image: any;

	// A function to fetch the image and update the image store
	async function fetchImage() {
		let pb_image = item.food_image
			? `${import.meta.env.VITE_PB_URL}/api/files/` +
			  item.collectionName +
			  '/' +
			  item.id +
			  '/' +
			  item.food_image
			: `${
					import.meta.env.VITE_PB_URL
			  }/api/files/vi08f0m1bznkfa3/lx41drdyghi9vpt/ingenbildetilgjengelig_vhlNaJijHB.png`;

		// Add a cache-busting query parameter to the image URL
		pb_image += `?cache=${Date.now()}`;

		const res = await getImage(pb_image);
		image = res;
	}

	// Run the image fetching function whenever 'item' changes
	$: {
		if (item) {
			fetchImage();
		}
	}
</script>

<div
	class="w-full bg-neutral text-neutral-content shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
>
	
	<img
		class="w-full object-cover group-hover:opacity-75 rounded-t-xl"
		src={image}
		alt={`bilde anv texbab.no ${item.name} meny`}
	/>

		<div class="px-4 py-3 w-full">
			<span class="mr-3 uppercase text-xs truncate block">Texbab</span>
			<p class="text-lg font-bold truncate block capitalize">{item.name}</p>
			<div class="flex items-center">
				<div class="badge badge-accent">
					<p class="text-sm font-semibold cursor-auto truncate block">Tilgjengelig</p>
				</div>
				<div class="ml-auto">
					<div class="rating rating-sm">
						<p class="cursor-auto text-xl font-bold text-green-400" >{item.price} kr</p>
					</div>
				</div>
			</div>
			<div class="inline-flex items-center mt-2">
				<button
					class="btn btn-neutral inline-flex items-center px-2 py-1 border-r"
					on:click={() => (quantity += 1)}
				>
					<Icon icon="ic:round-minus" class="h-6 w-4" />
				</button>
				<div class=" btn btn-neutral inline-flex items-center px-4 py-1 select-none">
					{quantity}
				</div>
				<button
					class="btn btn-neutral disabled:opacity-50 inline-flex items-center px-2 py-1 border-r"
					on:click={() => (quantity += 1)}
				>
					<Icon icon="ic:round-plus" class="h-6 w-4" />
				</button>
			</div>

			<button
				class="py-2 px-4 btn btn-primary disabled:opacity-50 mt-4 w-full flex items-center justify-center"
				on:click={() => addToCart(item, quantity)}
			>
				Bestill
				<Icon icon="bytesize:cart" class="h-6 w-6 ml-2" />
			</button>
		</div>
</div>
