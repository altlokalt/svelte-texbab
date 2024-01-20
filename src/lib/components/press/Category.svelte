<script>
	import { page } from '$app/stores';
</script>

<div class="grid grid-cols-1 gap-4 mt-6 max-h-l md:grid-cols-2 lg:grid-cols-2">
	{#each $page.data.articles as article (article.id)}
		<div class="max-w-5xl mx-auto py-2 px-2 sm:px-2 lg:px-2">
			<div
				class="bg-base-200 text-base-content rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
			>
				<div class="pt-2 pb-6 px-2 sm:pt-6 sm:px-6 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
					<div class="lg:self-center">
						<h2 class="text-3xl font-extrabold sm:text-2xl">
							<span class="block">{article.title}</span>
						</h2>
						<p class="mt-4 text-lg leading-6">
							{article.subtitle}
						</p>
						<a
							href="blog/{article.id}"
							class="m-2 btn btn-primary border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium"
						>
							{article.cta}
						</a>
					</div>
				</div>
				<img
					class="h-full lg:object-contain object-fill rounded-md"
					src={$page.data.imageUrls[article.id]}
					alt={article.title}
				/>
			</div>
		</div>
	{/each}
</div>
