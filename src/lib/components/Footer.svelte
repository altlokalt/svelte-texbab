<script lang="ts">
	import Icon from '@iconify/svelte';

	export let site_logo = `${import.meta.env.VITE_SITE_LOGO}`;
</script>

<footer class="footer footer-center p-10 bg-base-300">
	<div>
		<a href="/" class=" rounded-2xl">
			<img src={site_logo} alt="Texbab logo" class="" />
		</a>
		<div>
			{import.meta.env.VITE_SITE_COMPANY}:
			<p>Hvor hvert bitt er en rodeo av smak</p>
		</div>
		<p>
			Made by <a href="https://altlokalt.com" class="font-bold hover:text-primary">altlokalt.</a> Copyright
			© 2023 - All rights reserved
		</p>
		<a href="/salgsvilkaar" class="font-bold hover:text-primary">Salgsvilkår</a>
	</div>
	<div>
		<div class="grid grid-flow-col gap-4">
			<a href="/">
				<Icon icon="brandico:twitter-bird" width="24" height="24" />
			</a>
			<a href="/">
				<Icon icon="fa6-brands:youtube" width="24" height="24" />
			</a>
			<a href="/">
				<Icon icon="brandico:facebook" width="24" height="24" />
			</a>
		</div>
	</div>
</footer>
