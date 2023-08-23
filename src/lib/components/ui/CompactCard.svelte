<script lang="ts">
	export let item: any; // Specify the type for 'data'
	export let addToCart: any;
	let quantity: number;
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

		const res = await getImage(pb_image, 350, 200);
		image = res;
	}

	// Run the image fetching function whenever 'item' changes
	$: {
		if (item) {
			fetchImage();
		}
	}

	function handleSubmit(event: any) {
		event.preventDefault(); // Prevent the form from submitting and reloading the page
		addToCart(item, quantity); // Call the addToCart function with the selected item and quantity
	}
</script>

<div class="card card-compact w-auto bg-base-100 shadow-xl">
	<figure>
		{#if image}
			<img src={image} alt={item.name} />
		{/if}
	</figure>
	<div class="card-body">
		<h2 class="card-title">{item.name}</h2>
		<p>{item.price} kr</p>
		<p>{item.kommentar}</p>
		<div class="card-actions justify-end">
			<form on:submit={handleSubmit}>
				<div class="form-control">
					<label class="label" for="add to cart">
						<span class="label-text">Add to cart</span>
					</label>
					<label class="join">
						<button class="btn btn-primary join-item" on:click={() => quantity--}>-</button>
						<input
							type="text join-item input-bordered"
							placeholder="3"
							class="input input-bordered w-full"
							bind:value={quantity}
						/>
						<button class="btn btn-primary join-item" on:click={() => quantity++}>+</button>
						<button type="submit" class="btn btn-primary mx-1 join-item">Submit</button>
					</label>
				</div>
			</form>
		</div>
	</div>
</div>
