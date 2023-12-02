<script>
	import { toggleSidebar } from '$lib/utils/stores';
	import ThemeChanger from '$lib/components/ThemeChanger.svelte';
	import ProfileModal from '../ProfileModal.svelte';

	export let site_logo = `${import.meta.env.VITE_SITE_LOGO}`;
	export let site_name = $page.data.siteName;
</script>

<header class="relative z-10 h-16 w-full items-center border-b border-primary md:h-20">
	<div class="relative mx-auto flex h-full flex-col justify-center px-3">
		<div class="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
			<div class="relative left-0 flex w-3/4">
				<div class="group relative flex h-full w-12 items-center">
					<button
						type="button"
						aria-expanded="false"
						aria-label="Toggle sidebar"
						class="text-4xl focus:outline-none"
						on:click={toggleSidebar}
					>
						&#8801;
					</button>
				</div>
			</div>
			<a class="relative left-0 flex" href="/">
				<div class="group relative flex items-center w-12">
					<img src={site_logo} alt={site_name + 'homepage'} />
				</div>
			</a>
			<div class="relative ml-5 flex w-full items-center justify-end p-1 sm:right-auto sm:mr-0">
				<!-- theme -->
				<ThemeChanger />

				<!-- profile-->
				<ProfileModal />
			</div>
		</div>
	</div>
</header>
