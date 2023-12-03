<!-- CartItem.svelte -->
<script lang="ts">
	import { getImageURL } from '$lib/utils/api';
	import { page } from '$app/stores';

	export let item: any;
	const imageURL = getImageURL(item.collectionName, item.id, item.food_image);
	const alt = `bilde av ${item.name} i ${item.collectionName} meny fra ${$page.data.siteName}`;
</script>

<li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
	<div class="shrink-0">
		<img class="h-24 w-24 max-w-full rounded-lg object-cover" src={imageURL} {alt} />
	</div>

	<div class="relative flex flex-1 flex-col justify-between">
		<div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
			<div class="pr-8 sm:pr-5">
				<p class="text-base font-semibold ">{item.name}</p>
				<p class="mx-0 mt-1 mb-0 text-sm ">Quantity: {item.quantity}</p>
			</div>

			<div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
				<p
					class="shrink-0 w-20  font-semibold sm:order-2 sm:ml-8 sm:text-right"
				>
					{(item.price * item.quantity).toFixed(2)} kr
				</p>

				<div class="sm:order-1">
					<div class="mx-auto flex h-8 items-stretch ">
						<button
							class="flex items-center justify-center rounded-l-md bg-primary px-4 transition hover:bg-secondary hover:text-secondary-content text-primary-content"
							>-</button
						>
						<div
							class="flex w-full items-center justify-center bg-base-300 text-base-content px-4 text-xs uppercase transition"
						>
							{item.quantity}
						</div>
						<button
							class="flex items-center justify-center rounded-r-md bg-primary px-4 transition hover:bg-secondary hover:text-secondary-content text-primary-content"
							>+</button
						>
					</div>
				</div>
			</div>
		</div>

		<div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
			<button
				type="button"
				class="flex rounded p-2 text-center transition-all duration-200 ease-in-out focus:shadow hover:text-success"
			>
				<svg
					class="h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
						class=""
					/>
				</svg>
			</button>
		</div>
	</div>
</li>
