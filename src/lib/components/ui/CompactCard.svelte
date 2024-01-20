<script lang="ts">
	import Icon from '@iconify/svelte';
	export let item: any; // Specify the type for 'data'
	export let addToCart: any;
	let quantity = 1;
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
	class="relative flex flex-col bg-base-300 text-base-content shadow-md bg-clip-border rounded-xl sm:w-80 w-44"
>
	<div class="relative mx-4 mt-4 overflow-hidden bg-clip-border rounded-xl sm:h-80 h-44">
		<img
			src={image}
			alt={`bilde anv texbab.no ${item.name} meny`}
			class="object-cover w-full h-full"
		/>
	</div>
	<div class="p-6">
		<div class="flex items-center justify-between mb-2">
			<p class="block font-sans antialiased font-medium leading-relaxed">
				{item.name}
			</p>
			<p class="block font-sans antialiased font-medium leading-relaxed text-success">
				{item.price} kr
			</p>
		</div>

		<div class="badge badge-accent">
			<p
				class="block font-sans text-sm antialiased font-normal leading-normal text-accent-content opacity-75"
			>
				Tilgjengelig
			</p>
		</div>
	</div>
	<div class="p-6 pt-0">
		<button
			class="btn-primary align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
			type="button"
			on:click={() => addToCart(item, quantity)}
		>
			<!-- <Icon icon="bytesize:cart" class="h-6 w-6" /> -->
			Add to Cart
		</button>
	</div>
</div>
