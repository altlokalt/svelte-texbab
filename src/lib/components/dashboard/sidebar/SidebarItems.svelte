<script lang="ts">
	import { onMount } from 'svelte';
	import { data } from './data';
	import { page } from '$app/stores';
	import { closeSidebar, sidebarOpen, currentSection } from '$lib/utils/stores';

	const updateCurrentSection = (section: any) => {
		currentSection.set(section);
		if (window.innerWidth > 1024) {
			closeSidebar();
		}
	};

	onMount(() => {
		const sidebarData: any = data.flatMap((section) => {
			return section.content.map((content) => ({
				title: content.title,
				link: content.link,
				section: section.section
			}));
		});

		currentSection.set(sidebarData.find((item: any) => item.link === $page.url.pathname)?.section);
		// sidebar section not updating even though currentSection is updated
	});
</script>

<div class="flex h-full w-full">
	<div class="h-full bg-base-300 pt-10">
		{#each data as { icon, section } (section)}
			<div class="mx-4 my-1 flex w-full items-center justify-start p-3">
				<button on:click={() => updateCurrentSection(section)}>
					<div>
						<div
							class={`flex h-8 w-8 items-center justify-center ${
								section === $currentSection && 'rounded-full bg-primary'
							}`}
						>
							<span><svelte:component this={icon} /></span>
						</div>
					</div>
				</button>
			</div>
		{/each}
	</div>

	{#if !$sidebarOpen || window.innerWidth < 1024}
		<div class="h-full w-full bg-base-200 pt-5">
			{#each data as { section, content } (section)}
				<div>
					{#if section === $currentSection}
						<div>
							<div class="pl-3 text-lg font-medium">
								{section}
							</div>
							<ul class="list-disc px-8 pt-6">
								{#each content as item (item.title)}
									<li>
										<a
											href={item.link}
											class={`py-3 block pl-3 text-sm font-normal   ${
												item.link === $page.url.pathname && 'rounded-md bg-primary'
											}`}
										>
											{item.title}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>
