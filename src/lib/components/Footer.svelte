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
			<!--Enten du er i humør for en klassisk amerikansk favoritt som en saftig hamburger, 
				et stykke Italia med våre appetittvekkende pizzaer, eller en smak av Midtøsten 
				med våre saftige kebaber, har vi noe for enhver smak. Reisen vår begynte med en enkel idé: 
				å skape et varmt og innbydende sted hvor venner og familier kan samles 
				for å nyte deilige retter laget med de beste ingrediensene. 
				Vi har brukt år på å perfeksjonere oppskriftene og teknikkene våre, for å sikre at hver bit er et utbrudd av smak og tilfredsstillelse. Men det handler ikke bare om maten; det handler om opplevelsen.-->
			<p class="font-bold hover:text-primary">
				{import.meta.env.VITE_SITE_COMPANY} Org: 915 197 043
			</p>
			<p>
				<a href="https://maps.google.com/?cid=15017972495342881663"
					>ADRESSE: Raveien 314, 3184 Borre</a
				>
			</p>
			<p>Kontakte oss: <a href="tel:+4740848494">+47 40 84 84 94</a></p>
			<p>
				Send Epost: <a href="mailto:texbabhorten@gmail.com" class="list-unstyled"
					>kontakt@texbab.no</a
				>
			</p>
		</div>
		<div class="col-md-3">
			<h4 class="font-bold hover:text-primary">Åpningstida</h4>
			<ul class="list-unstyled">
				<li>Mandag - Onsdag 11:00 - 21:00</li>
				<li>Torsdag - Fredag 11:00 - 22:00</li>
				<li>Lørdag 10:00 - 22:00</li>
				<li>Søndag 12:00 - 21:00</li>
			</ul>
		</div>
		<div class="col-md-3">
			<h4>Hva venter du på? RING OSS & sjekk om ditt favoritt retter er tilgjengelig.</h4>
		</div>

		<p>
			Designet av: <a href="https://www.altlokal.no/" class="font-bold hover:text-primary"
				>ALT|LOKALT.NO</a
			> Copyright © 2023 | Alle rettigheter forbeholdt | Vilkår
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
			<a href="https://www.facebook.com/Texbab/photos_by">
				<Icon icon="brandico:facebook" width="24" height="24" />
			</a>
		</div>
	</div>
</footer>
