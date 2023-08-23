<script lang="ts">
	import Icon from '@iconify/svelte';

	export let site_logo = `${import.meta.env.VITE_SITE_LOGO}`;
</script>

<footer class="footer footer-center p-10">
	<div>
		<a href="/" class=" rounded-2xl hover:bg-primary">
			<img src={site_logo} alt="Texbab logo" class="w-14" />
		</a>
		<p>Texbab AS: Hvor hvert bitt er en rodeo av smak</p>
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
